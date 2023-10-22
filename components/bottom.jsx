import { Github } from 'lucide-react';
const Bottom = () => {
  return (<div className="fixed bottom-0 right-0 text-white p-2">
    <div className="flex flex-col">
      <a className="hover:text-amber-400"
        href="https://github.com/stahlgazer" target="_blank">Made by: Stahlgazer</a>
      <a className="hover:text-amber-400"
        href="https://github.com/stahlgazer/my-ui" target="_blank">Contribute:{" "}
        <Github className="inline-block text-amber-500" />
      </a>
    </div>
  </div >)
}

export default Bottom
