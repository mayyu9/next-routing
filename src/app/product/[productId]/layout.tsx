
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}:{
  children: React.ReactNode;
}) {

  const count = getRandomInt(2);

  if(count === 1) {
      throw new Error(' error while loading the products page');
  }

  return (
   <>
        {children}
        <h2>Features products</h2>
        {/* carosule component */}
     
    </>
  );
}
