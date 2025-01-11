function NotAuthorized() {
  return (
    <div className={`px-1 pb-2 text-center text-sm text-gray-800`}>
      <p className="font-semibold"> Sorry! </p>
      <p>You are not the author of this post and</p>
      <p>cannot perform edit, delete, or duplicate operations.</p>
    </div>
  );
}

export default NotAuthorized;
