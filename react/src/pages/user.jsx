import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";


const UserPage = () => {
    return (
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <UserForm />
            <UserTable />
        </div>
    );
}

export default UserPage;