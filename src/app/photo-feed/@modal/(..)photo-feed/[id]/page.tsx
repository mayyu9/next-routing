import Image from "next/image";
import wonderImages, {wonderImage} from '../../../wonder';
import Modal from "@/components/Modal";

export default function PhotoModal({
    params: {id},
}: {
    params: {id: string}
}) {

    const photo: wonderImage = wonderImages.find((p) => p.id === id);
    return(
        <Modal>
            <Image
                alt={photo?.name}
                src={photo?.src}
                className="w-full object-cover aspect-square"
            />
             <div className="bg-white py-4">
                <h3>{photo?.photographer}</h3>
                <h3>{photo?.location}</h3>
            </div>

        </Modal>
    )
}