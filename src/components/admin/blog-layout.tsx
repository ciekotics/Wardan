"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { newBlogsSchema } from "./add-blog/newblog-schema";
import { FaHeading } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import {
  useAddBlogMutation,
  useEditBlogMutation,
  useGetBlogQuery,
} from "@/store/actions/slices/api-slice";
import { useParams, useRouter } from "next/navigation";

const NewBlogLayout = () => {
  const router = useRouter();
  const param: { id?: string } = useParams();
  const { data: blogData } = useGetBlogQuery(
    {
      id: param.id ? Number(param.id) : 0,
    },
    {
      skip: !param.id,
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const [addBlog] = useAddBlogMutation();
  const [editBlog] = useEditBlogMutation();

  const [isMounted, setIsMounted] = useState(false);
  const [imagePreview, setImagePreview] = useState<Blob | string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [stringLengths, setStringLength] = useState<
    Record<
      "title" | "description" | "smallParagraph" | "longParagraph",
      {
        max: number;
        min: number;
        current: number;
        effectiveLength: number;
        isAllowed: boolean;
      }
    >
  >({
    title: {
      max: 15,
      min: 10,
      effectiveLength: 10,
      current: 0,
      isAllowed: false,
    },
    description: {
      min: 15,
      max: 35,
      effectiveLength: 15,
      current: 0,
      isAllowed: false,
    },
    smallParagraph: {
      min: 25,
      max: 50,
      effectiveLength: 25,
      current: 0,
      isAllowed: false,
    },
    longParagraph: {
      min: 150,
      max: 200,
      effectiveLength: 150,
      current: 0,
      isAllowed: false,
    },
  });
  const [hasDescription, setHasDescription] = useState<boolean>(false);
  const [hasSmallParagraph, setHasSmallParagraph] = useState<boolean>(false);

  const blogForm = useForm<z.infer<typeof newBlogsSchema>>({
    resolver: zodResolver(newBlogsSchema),
    defaultValues: {
      title: "",
      longParagraph: "",
    },
  });

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split(".").pop();
      const newFileName = `blog.${fileExtension}`;
      const renamedFile = new File([file], newFileName, { type: file.type });

      setImageFile(renamedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const blob = new Blob([reader.result], { type: file.type });
          setImagePreview(blob);
        }
      };
      reader.readAsArrayBuffer(renamedFile);
    }
  };

  const onStringChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    field: "title" | "description" | "smallParagraph" | "longParagraph"
  ) => {
    const text = e.target.value;
    let isAllowed: boolean;

    if (field === "description") {
      if (text.length === 0) {
        setHasDescription(false);
      } else {
        setHasDescription(true);
      }
      blogForm.setValue("description", text);
    }

    if (field === "smallParagraph") {
      if (text.length === 0) {
        setHasSmallParagraph(false);
      } else {
        setHasSmallParagraph(true);
      }
      blogForm.setValue("smallParagraph", text);
    }

    field === "title" && blogForm.setValue("title", text);
    field === "longParagraph" && blogForm.setValue("longParagraph", text);

    if (
      stringLengths[field].max < text.length ||
      stringLengths[field].min > text.length
    ) {
      isAllowed = false;
    } else {
      isAllowed = true;
    }

    setStringLength((p) => ({
      ...p,
      [field]: {
        ...p[field],
        current: text.length,
        effectiveLength:
          text.length > p[field].min
            ? p[field].max - text.length
            : p[field].min - text.length,
        isAllowed,
      },
    }));
  };

  const onSubmit = async (data: z.infer<typeof newBlogsSchema>) => {
    const formData = new FormData();

    try {
      if (!imagePreview) {
        throw new Error("Please Upload the Image");
      }
      if (!imageFile) {
        if (!param.id) {
          throw new Error("Something went wrong");
        }
      }

      formData.append("title", data.title);
      formData.append("long-paragraph", data.longParagraph);
      hasDescription &&
        data?.description !== undefined &&
        formData.append("description", data?.description);
      hasSmallParagraph &&
        data?.smallParagraph !== undefined &&
        formData.append("small-paragraph", data.smallParagraph);
      imageFile && formData.append("banner", imageFile);
      param?.id && formData.append("id", param.id)



      let res: { message: string; submit: boolean };

      if (param?.id) {
        res = await editBlog(formData).unwrap();
      } else {
        res = await addBlog(formData).unwrap();
      }

      if (res.submit) {
        blogForm.reset();
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (blogData) {
      blogForm.setValue("title", blogData?.blogs[0]?.title);
      blogForm.setValue(
        "smallParagraph",
        blogData?.blogs[0]?.["small-paragraph"]
          ? blogData?.blogs[0]?.["small-paragraph"]
          : undefined
      );
      blogForm.setValue(
        "description",
        blogData?.blogs[0]?.description
          ? blogData?.blogs[0]?.description
          : undefined
      );
      blogForm.setValue(
        "longParagraph",
        blogData?.blogs[0]?.["long-paragraph"]
      );

      setImagePreview(blogData?.blogs[0]?.banner);
    } else {
      blogForm.setValue("title", "");
      blogForm.setValue("smallParagraph", undefined);
      blogForm.setValue("description", undefined);
      blogForm.setValue("longParagraph", "");

      setImagePreview(null);
    }
  }, [blogData, blogForm]);

  if (!isMounted) {
    return null;
  }

  console.log(blogForm.watch());

  return (
    <form onSubmit={blogForm.handleSubmit(onSubmit)}>
      {/* TITLE */}
      <section className="blog-add-title">
        <div className="heading">
          <h5>Title</h5>
          <h5
            className={`${
              stringLengths.title.isAllowed ? "allowed" : "not-allowed"
            }`}
          >{`${stringLengths.title.effectiveLength} / ${
            stringLengths.title.current > stringLengths.title.min
              ? stringLengths.title.max
              : stringLengths.title.min
          }`}</h5>
        </div>
        <span className="input">
          <FaHeading size={25} />
          <input
            type="text"
            placeholder="Heading..."
            onChange={(e) => {
              onStringChange(e, "title");
            }}
            value={blogForm.watch().title}
          />
        </span>
      </section>

      {/* DESCRIPTION */}
      <section className="blog-add-description">
        <div className="heading">
          <h5>Description (optional)</h5>
          {hasDescription && (
            <h5
              className={`${
                stringLengths.description.isAllowed ? "allowed" : "not-allowed"
              }`}
            >
              {`${stringLengths.description.effectiveLength} / ${
                stringLengths.description.current >
                stringLengths.description.min
                  ? stringLengths.description.max
                  : stringLengths.description.min
              }`}
            </h5>
          )}
        </div>
        <textarea
          placeholder="Description..."
          onChange={(e) => {
            onStringChange(e, "description");
          }}
          value={blogForm.watch().description}
        ></textarea>
      </section>

      {/* BANNER */}
      <section className="blog-add__banner">
        <h5>Banner</h5>
        <div className="blog-add__banner-field">
          <input type="file" accept="image/*" onChange={onImageChange} />
          {imagePreview ? (
            <div
              className="image-preview"
              onClick={() => {
                setImagePreview(null);
              }}
            >
              <Image
                src={
                  imagePreview instanceof Blob
                    ? URL.createObjectURL(imagePreview)
                    : imagePreview
                }
                alt="Selected Banner"
                width={200}
                height={200}
                priority
              />
            </div>
          ) : null}
          <div
            className="plus-icon"
            style={{
              opacity: imagePreview ? 0 : 100,
            }}
          >
            <FaPlus size={40} />
          </div>
        </div>
      </section>

      {/* SMALL PARAGRAPH */}
      <section className="small-paragraph">
        <div className="heading">
          <h5>Paragraph 1 (optional)</h5>
          {hasSmallParagraph && (
            <h5
              className={`${
                stringLengths.smallParagraph.isAllowed
                  ? "allowed"
                  : "not-allowed"
              }`}
            >
              {`${stringLengths.smallParagraph.effectiveLength} / ${
                stringLengths.smallParagraph.current >
                stringLengths.smallParagraph.min
                  ? stringLengths.smallParagraph.max
                  : stringLengths.smallParagraph.min
              }`}
            </h5>
          )}
        </div>
        <textarea
          placeholder="Paragraph 1..."
          onChange={(e) => {
            onStringChange(e, "smallParagraph");
          }}
          value={blogForm.watch().smallParagraph}
        ></textarea>
      </section>

      {/* LONG PARAGRAPH */}
      <section className="long-paragraph">
        <div className="heading">
          <h5>Long Description</h5>
          <h5
            className={`${
              stringLengths.longParagraph.isAllowed ? "allowed" : "not-allowed"
            }`}
          >
            {`${stringLengths.longParagraph.effectiveLength} / ${
              stringLengths.longParagraph.current >
              stringLengths.longParagraph.min
                ? stringLengths.longParagraph.max
                : stringLengths.longParagraph.min
            }`}
          </h5>
        </div>
        <textarea
          placeholder="Description..."
          onChange={(e) => {
            onStringChange(e, "longParagraph");
          }}
          value={blogForm.watch().longParagraph}
        ></textarea>
      </section>

      <button type="submit">
        {param?.id ? "Update Changes" : "Add New Blog"}
      </button>
    </form>
  );
};

export default NewBlogLayout;
