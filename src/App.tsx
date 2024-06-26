import { useState, useEffect, FC } from "react";
import getPhotos from "./helpers/photos-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import ReactModal from "react-modal";
import { Photo } from "./App-types";

const App: FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [image, setImage] = useState<null | Photo>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (!inputValue) return;
    async function fetchPhotos() {
      try {
        setLoader(true);
        setError(false);
        const data = await getPhotos(inputValue, page);
        console.log(data);

        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    fetchPhotos();
  }, [inputValue, page]);

  const handleChangeInputValue = (newValue: string) => {
    setPhotos([]);
    setPage(1);
    setInputValue(newValue);
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (photo: Photo) => {
    if (photo) {
      setImage(photo);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  ReactModal.setAppElement("#root");
  return (
    <div>
      <SearchBar onSearch={handleChangeInputValue} />
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <ImageGallery listPhoto={photos} onOpen={handleOpenModal} />
      {image && (
        <ImageModal
          isOpen={openModal}
          image={image}
          onClose={handleCloseModal}
        />
      )}
      {photos.length > 0 && <LoadMoreBtn onLoad={handleLoadMore} />}
    </div>
  );
};
export default App;
