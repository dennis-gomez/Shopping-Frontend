import HeadingTwo from "../atoms/headingTwo";
import FormUser from "../organisms/formUser";

const TempAddUser: React.FC = () => {
    return (
        <>
            <div
                className="card-form"
            >
                <HeadingTwo 
                label="Create User"
                className=""
                />
                <FormUser 
                    classNameBtn="button-add"
                />
            </div> 
        </>
    );
}

export default TempAddUser;