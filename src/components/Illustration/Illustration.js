function Illustration({ name, image }) {
  return (
    <div>
      <p>{name}</p>
      <img src={image} />
    </div>
  );
}

export default Illustration;
