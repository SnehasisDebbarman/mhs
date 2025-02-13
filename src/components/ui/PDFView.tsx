import { X } from "lucide-react";

interface ModalProps {
    pdfVisible: boolean;
    onClose: () => void;
    mhs: string; // URL of the PDF to display
}

const PDFView: React.FC<ModalProps> = ({ pdfVisible, onClose, mhs }) => {
    if (!pdfVisible) return null; // Don't render anything if not visible

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close the modal only if the overlay is clicked
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return (
        <div onClick={handleOverlayClick} className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-[100]">
            <div className="modalContent relative bg-[#B508B5] p-4 rounded shadow-lg">
                <button onClick={onClose} className=" absolute mb-2 text-white right-5">
                    <X />
                </button>
                <iframe
                    src={mhs}
                    className="max-w-6xl w-[80vw] h-[80vh] rounded"
                    style={{ paddingTop: 30 }}
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default PDFView;
