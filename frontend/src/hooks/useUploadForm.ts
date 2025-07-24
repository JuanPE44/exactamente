import { useState } from 'react';

export interface FormData {
  materia: string;
  tipoAporte: string;
  titulo: string;
  descripcion: string;
  archivo: File | null;
  autor: string;
}

export const useUploadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    materia: '',
    tipoAporte: '',
    titulo: '',
    descripcion: '',
    archivo: null,
    autor: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, archivo: file }));
    if (errors.archivo) {
      setErrors((prev) => ({ ...prev, archivo: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.materia) newErrors.materia = 'Selecciona una materia';
    if (!formData.tipoAporte) newErrors.tipoAporte = 'Selecciona el tipo de aporte';
    if (!formData.titulo.trim()) newErrors.titulo = 'Ingresa un título';
    if (!formData.archivo) newErrors.archivo = 'Selecciona un archivo';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (onSuccess?: () => void) => (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      onSuccess?.();
      setTimeout(() => {
        resetForm();
      }, 3000);
    }
  };

  const resetForm = () => {
    setFormData({
      materia: '',
      tipoAporte: '',
      titulo: '',
      descripcion: '',
      archivo: null,
      autor: '',
    });
    setErrors({});
    setShowSuccess(false);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return {
    formData,
    errors,
    showSuccess,
    handleInputChange,
    handleFileChange,
    handleSubmit,
    closeSuccess,
  };
};
