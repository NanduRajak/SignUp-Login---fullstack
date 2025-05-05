export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl items-center">
        Welcome to your profile page!
        <span className="p-2 ml-2 rounded-1xl bg-green-600">{params.id}</span>
      </p>
    </div>
  );
}
