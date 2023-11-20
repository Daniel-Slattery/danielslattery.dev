const Posts = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Posts</h1>
      <div className="bg-white shadow-xl rounded-lg p-6 md:w-2/3 lg:w-1/2">
        <p className="text-lg text-gray-800">
          🚧{' '}
          <strong className="font-bold">Whoops, Still Tinkering Here!</strong>{' '}
          🛠️
        </p>
        <p className="mt-4">Hey there! 👋</p>
        <p className="mt-2">
          You've stumbled upon a little corner of my site that's still a bit of
          a creative mess. I'm in the middle of adding some cool new stuff here,
          so things might look a bit wonky for now.
        </p>
        <p className="mt-2">
          In the meantime, feel free to roam around the rest of my site –
          there's plenty more to see! 🌟
        </p>
        <p className="mt-2">
          Stay tuned for some awesome updates coming your way. And hey, if
          you've got ideas or just want to say hi, drop me a line at
          daniel.slattery1@gmail.com. I'd love to hear from you!
        </p>
        <p className="mt-4 mb-2">Catch you later! 🚀</p>
      </div>
    </div>
  )
}

export default Posts