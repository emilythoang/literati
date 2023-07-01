/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <div className="flex flex-col p-4 md:px-8 lg:px-12">
      <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
        Facebook Data Deletion Instructions URL
      </h1>
      <p>
        If you want to delete your activities for Literati, you can remove your
        information by following these steps:
      </p>
      <ol className="list-decimal">
        <li>
          Go to your Facebook Account’s Setting & Privacy. Click “Settings”
        </li>
        <li>
          Look for “Apps and Websites” and you will see all of the apps and
          websites you linked with your Facebook.
        </li>
        <li>Look for Literati and click "Remove".</li>
        <li>
          Congratulations, you have succesfully removed your app activities.
        </li>
      </ol>
    </div>
  );
}
