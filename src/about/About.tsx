export function About() {
  return (
    <div className="px-32 grid gap-8 grid-cols-2">

      <div className="flex items-center">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold">
            Maria Ejares
          </p>
          <p>
            Maecenas at purus vestibulum, dictum justo ut, venenatis eros. Cras sodales sapien nec diam finibus consequat. Nullam malesuada nulla tellus, et condimentum elit tempus non. Morbi in urna vitae enim varius vehicula.
          </p>
          <p>
            Quisque ultrices metus mauris, vel venenatis tellus tempor nec.
          </p>
        </div>
      </div>
      <div className="flex content-center bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('/about/portrait.jpeg')"}} />
    </div>
  )
}
