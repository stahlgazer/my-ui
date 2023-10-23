import { Github } from 'lucide-react';
export default function Bottom() {
  return (
    <div className="fixed bottom-0 right-0 text-white m-2">
      <div className="flex gap-6">
        <a className="hover:text-fuchsia-500"
          href="https://github.com/stahlgazer" target="_blank">Made by: <span className="text-blue-300 hover:text-fuchsia-500">Stahlgazer</span></a>
        <a className="hover:text-fuchsia-500"
          href="https://github.com/stahlgazer/my-ui" target="_blank">Contribute:{" "}
          <Github className="inline-block text-blue-300 hover:text-fuchsia-500" />
        </a>
      </div>
    </div >
  )
}


