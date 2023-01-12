import Image from "next/image"

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-6/8 h-[60px]">
        <a href="https://github.com/davepaulsanders" target="_blank" rel="noreferrer">
            <img className="w-[50px] hover:w-[60px]" src="github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/davepsanders/" target="_blank" rel="noreferrer">
            <img className="w-[40px] hover:w-[50px]" src="linkedin.png" alt="linkedin" />
        </a>
        <a href="https://davepsanders.bandcamp.com/releases" target="_blank" rel="noreferrer">
            <img className="w-[39px] hover:w-[49px] ml-1" src="bandcamp.png" alt="bandcamp" />
        </a>
    </div>
  )
}

export default Footer