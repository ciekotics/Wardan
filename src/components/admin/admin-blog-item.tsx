
import { ImCross } from "react-icons/im";
import { MdModeEditOutline } from "react-icons/md";
import Image from "next/image";
import { Blog } from "@/interface";
import { useDeleteBlogMutation } from "@/store/actions/slices/api-slice";
import { useRouter } from "next/navigation";

const AdminBlogItem = ({ item }: { item: Blog }) => {
  
  const router = useRouter();
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async () => {
    try {
      const response = await deleteBlog({ id: item.id }).unwrap();
      console.log(response.message);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleEdit = () => {
    router.push(`/admin/edit-blog/${item.id}`)
  }

  return (
    <div className="all-blogs__item">
      {/* {item.title} */}

      <div className="btns">
        <div className="edit">
          <MdModeEditOutline size={25} onClick={handleEdit} />
        </div>
        <div className="delete" onClick={handleDelete}>
          <ImCross size={25} />
        </div>
      </div>

      <Image
        src={item.banner}
        alt={item.id + item.title}
        width={100}
        height={100}
        priority
      />
      <div className="title">{item.title}</div>
    </div>
  );
};

export default AdminBlogItem;
