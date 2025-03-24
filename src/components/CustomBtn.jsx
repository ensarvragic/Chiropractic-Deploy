export default function CustomButton({ children, onClick }) {
    return (
      <button className="custom-btn" onClick={onClick}>
        {children}
      </button>
    );
  }