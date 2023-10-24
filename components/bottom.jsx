import { Github } from 'lucide-react';

export default function Bottom() {
  return (
    <div className="fixed bottom-0 right-0 text-white m-2 text-xs">
      <div className="flex gap-2">
        <p>MyUI by <span className="underline decoration-fuchsia-500">Stahlgazer</span> / Contribute: </p>
        <a className="hover:text-fuchsia-500"
          href="https://github.com/stahlgazer/my-ui" target="_blank">
          <Github className="text-blue-300 hover:text-fuchsia-500 h-4 pr-2" />
        </a>
      </div>
    </div >
  )
}


