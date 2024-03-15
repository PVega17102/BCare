import '@/css/additional-styles/loader.css'

function Loader({loading}) {
  return (
    <div className={`loader fixed flex items-center justify-center w-full h-full z-50 overflow-hidden ${loading ? '' : 'loader-hidden'}`}>
      <video autoPlay muted loop className={`object-cover h-full w-auto bg-gray-100 ${loading ? '' : 'loader-hidden'}`}>
        <source className='object-cover h-auto w-full' src='/loadingVideo.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Loader;