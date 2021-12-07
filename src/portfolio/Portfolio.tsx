export function Portfolio() {
  return (
    <div className="px-32 flex gap-8 justify-between content-center">
      <div className="flex flex-1 flex-col gap-y-8"> 
        <div 
          className="h-96 w-full bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: "url('/portfolio/1.jpeg')"}} />
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: "url('/portfolio/3.jpeg')"}} />
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: "url('/portfolio/5.jpeg')"}} />
      </div>
      <div className="flex flex-1 flex-col gap-y-8"> 
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: "url('/portfolio/2.jpeg')"}} />
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: "url('/portfolio/4.jpeg')"}} />
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: "url('/portfolio/6.jpeg')"}} />
      </div>

      {/*<div className="flex flex-col gap-y-8"> 
        <img src="/portfolio/1.jpeg" alt=""/>
        <img src="/portfolio/3.jpeg" alt=""/>
        <img src="/portfolio/5.jpeg" alt=""/>
      </div>
      <div className="flex flex-col gap-y-8"> 
        <img src="/portfolio/2.jpeg" alt=""/>
        <img src="/portfolio/4.jpeg" alt=""/>
        <img src="/portfolio/6.jpeg" alt=""/>
      </div>*/}
    </div>
  )
}
