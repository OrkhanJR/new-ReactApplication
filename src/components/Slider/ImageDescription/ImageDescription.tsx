import { Children } from "src/components/Types/Children";

type ImageDescriptionProps = {
    children: Children;
}

const ImageDescription = ({children}: ImageDescriptionProps) => {
    return (
        <>
        <div>{children}</div>
        </>
    )
}
export default ImageDescription; 