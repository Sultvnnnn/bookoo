import React from "react";
import { Edit3, Trash2, BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BookCard = ({ book, onEdit }) => {
  const handleDelete = async () => {
    await deleteBook(book.id);
  };

  return (
    <div className="h-full flex flex-col bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      {/* Cover Image */}
      <div className="relative h-56 w-full border-b-2 border-black overflow-hidden bg-gray-100 rounded-t-lg">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://placehold.co/400x600?text=No+Cover";
          }}
        />
        <div className="absolute top-2 right-2 bg-main border-2 border-black px-3 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {book.publishYear}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide bg-yellow-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {book.genre || "Umum"}
          </span>
        </div>

        <h3
          className="text-xl font-black leading-tight mb-1 line-clamp-2 uppercase"
          title={book.title}
        >
          {book.title}
        </h3>
        <p className="text-sm font-medium text-gray-600 mb-4 italic">
          by {book.author}
        </p>

        {/* --- DRAWER UNTUK DESKRIPSI --- */}
        <div className="mt-auto mb-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="neutral"
                className="w-full h-8 text-xs border-2 border-black bg-gray-100 hover:bg-gray-200"
              >
                <BookOpenText className="w-3 h-3 mr-2" /> LIHAT SINOPSIS
              </Button>
            </DrawerTrigger>
            <DrawerContent className="border-t-2 border-black bg-white">
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl font-black uppercase text-center">
                    {book.title}
                  </DrawerTitle>
                  <DrawerDescription className="text-center font-bold text-gray-500">
                    Ditulis oleh {book.author} ({book.publishYear})
                  </DrawerDescription>
                </DrawerHeader>

                <div className="p-4 text-justify leading-relaxed font-medium border-2 border-black bg-yellow-50 m-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {book.description || "Belum ada deskripsi untuk buku ini."}
                </div>

                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button
                      variant="noShadow"
                      className="w-full bg-main border-2 border-black"
                    >
                      Tutup
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        {/* ----------------------------- */}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3 border-t-2 border-black border-dashed mt-auto">
          <Button
            onClick={() => onEdit(book)}
            className="flex-1 bg-blue-400 hover:bg-blue-500 text-black border-2 border-black h-9 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
          >
            <Edit3 size={14} className="mr-1" /> Edit
          </Button>

          {/* --- TOMBOL HAPUS DENGAN MODAL --- */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="flex-1 bg-red-400 hover:bg-red-500 text-black border-2 border-black h-9 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
                <Trash2 size={14} className="mr-1" /> Hapus
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle className="font-black uppercase text-xl">
                  Yakin ingin menghapus?
                </AlertDialogTitle>
                <AlertDialogDescription className="font-medium text-black/70">
                  Buku "{book.title}" akan dihapus permanen dari katalog
                  perpustakaan.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-2 border-black font-bold">
                  Batal
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
                >
                  Ya, Hapus
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {/* -------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
