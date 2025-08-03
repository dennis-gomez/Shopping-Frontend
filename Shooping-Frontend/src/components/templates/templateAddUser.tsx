import HeadingTwo from "../atoms/headingTwo";
import FormUser from "../organisms/formUser";

const TempAddUser: React.FC = () => {
    return (
        <>
            <HeadingTwo 
                label="Create User"
                className=""
            />
            <FormUser 
                classNameBtn="button-add"
            />
        </>
    );
}

export default TempAddUser;