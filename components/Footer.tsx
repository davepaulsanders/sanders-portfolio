import Image from "next/image"

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-6/8 h-[60px]">
      <a
        href="https://github.com/davepaulsanders"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width={50}
          height={50}
          className="hover:w-[60px]"
          src="/github.png"
          alt="github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/davepsanders/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width={40}
          height={40}
          className="hover:w-[50px]"
          src="/linkedin.png"
          alt="linkedin"
        />
      </a>
      <a
        href="https://davepsanders.bandcamp.com/releases"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width={39}
          height={39}
          className="hover:w-[49px] ml-1"
          src="/bandcamp.png"
          alt="bandcamp"
        />
      </a>
      <a
        href="https://drive.google.com/file/d/1l1-t_Q4R2lx7XQIi9Bk8B8oC-4vtraIJ/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width={37}
          height={37}
          className="hover:w-[49px] ml-1"
          src="/resume.png"
          alt="resume"
        />
      </a>
    </div>
  )
}

export default Footer
