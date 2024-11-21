type FormInfo = {
    name?: string;
    email: string;
    password: string;
    repeatPassword?: string;
};

type CustomButtonProps = {
    text: string;
    onPress?: () => void;
}