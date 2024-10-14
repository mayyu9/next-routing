export default function AuthLayout({
    children,
  }:{
    children: React.ReactNode;
  }) {
    return (
     <>
      <h2 style={{color:'red'}}>Inner auth Layout</h2>
        {children}
      </>
    );
  }
  