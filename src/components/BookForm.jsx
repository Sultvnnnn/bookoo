import React, { useEffect, useState } from "react";
import { useBooks } from "../context/BookContext";
import { Save, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const BookForm = ({ currentBook, setEditing }) => {
  const { addBook, updateBook } = useBooks();

  //? Initial state sesuai data buku
  const initialState = {
    title: "",
    author: "",
    isbn: "",
    publishYear: "",
    genre: "",
    pages: "",
    publisher: "",
    coverImage: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentBook) {
      setFormData(currentBook);
      setIsOpen(true);
    }
  }, [currentBook]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleGenreChange = (value) => {
    setFormData({ ...formData, genre: value });
  };

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      setEditing(null);
      setFormData(initialState);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) return;

    let result;
    if (currentBook) {
      result = await updateBook(currentBook.id, formData);
    } else {
      result = await addBook(formData);
    }

    if (result && result.success) {
      setIsOpen(false);
      setFormData(initialState);
      setEditing(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {!currentBook && (
        <div className="flex justify-center mb-10">
          <DialogTrigger asChild>
            <Button className="h-14 px-8 text-lg font-bold bg-main hover:bg-main/90 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              <Plus className="mr-2 h-6 w-6" strokeWidth={3} /> TAMBAH BUKU BARU
            </Button>
          </DialogTrigger>
        </div>
      )}

      <DialogContent className="sm:max-w-[700px] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-black uppercase tracking-tight">
              {currentBook ? "Edit Data Buku" : "Entri Buku Baru"}
            </DialogTitle>
            <DialogDescription className="text-base font-medium text-black/70">
              Lengkapi detail buku di bawah ini.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title" className="font-bold uppercase">
                Judul Buku
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Contoh: Harry Potter"
                className="font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="author" className="font-bold uppercase">
                  Penulis
                </Label>
                <Input
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="publishYear" className="font-bold uppercase">
                  Tahun
                </Label>
                <Input
                  id="publishYear"
                  name="publishYear"
                  type="number"
                  value={formData.publishYear}
                  onChange={handleChange}
                  placeholder="2026"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* --- SELECT COMPONENT --- */}
              <div className="grid gap-2">
                <Label className="font-bold uppercase">Genre</Label>
                <Select
                  value={formData.genre}
                  onValueChange={handleGenreChange}
                >
                  <SelectTrigger className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-medium">
                    <SelectValue placeholder="Pilih Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fiction">Fiction</SelectItem>
                    <SelectItem value="Fantasy">Fantasy</SelectItem>
                    <SelectItem value="Classic">Classic</SelectItem>
                    <SelectItem value="Teknologi">Teknologi</SelectItem>
                    <SelectItem value="Sejarah">Sejarah</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* ------------------------ */}

              <div className="grid gap-2">
                <Label htmlFor="coverImage" className="font-bold uppercase">
                  URL Gambar
                </Label>
                <Input
                  id="coverImage"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description" className="font-bold uppercase">
                Deskripsi
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Sinopsis..."
                rows={4}
              />
            </div>
          </div>

          <DialogFooter className="mt-4 gap-2">
            <Button
              type="button"
              variant="neutral"
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-auto font-bold"
            >
              Batal
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-main font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
            >
              <Save className="mr-2 h-4 w-4" /> Simpan Data
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookForm;
