import dynamic from "next/dynamic";

const Editor = dynamic(() => import('@/components/Editor'), {
  ssr: false,
  loading: () => <div>...loading</div>
});


const Page = () => {
  return (
    <div className="w-full min-h-screen bg-white " >
      <Editor/>
    </div>
  ) 
};

export default Page;