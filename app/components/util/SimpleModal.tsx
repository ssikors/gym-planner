type Props = {
  children: React.ReactNode;
};

export const SimpleModal: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-24 py-12 rounded-md bg-slate-800 text-white border-4 border-t-teal-100 border-l-teal-100 border-b-teal-300 border-r-teal-300 border-opacity-80">
      {children}
    </div>
  );
};
