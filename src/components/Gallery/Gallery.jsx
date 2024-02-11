import Div from "../Div/Div"
import Img from "../Img/Img";
import A from "../A/A";
import Ul from "../Ul/Ul";
import Li from "../Li/Li";
import "../../App.css"

const Gallery = () => {
  return (
    <>
      <Div className="gallery">
        <Div className="photo">
          <Img
            id="photo-1"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          ></Img>
          <Img
            id="photo-2"
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
          ></Img>
          <Img
            id="photo-3"
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          ></Img>
          <Img
            id="photo-4"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          ></Img>
        </Div>
        <Div className="preview">
          <Ul>
            <Li>
              <A href="#photo-1">
                <Img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"></Img>
              </A>
            </Li>
            <Li>
              <A href="#photo-2">
                <Img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"></Img>
              </A>
            </Li>
            <Li>
              <A href="#photo-3">
                <Img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"></Img>
              </A>
            </Li>
            <Li>
              <A href="#photo-4">
                <Img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"></Img>
              </A>
            </Li>
          </Ul>
        </Div>
      </Div>
    </>
  );
}

export default Gallery