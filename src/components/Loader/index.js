import { Img } from "components";

const Component = ({ loading }) => (
    loading && (
        <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] w-full h-full z-[9999]">
            <div className="loader-modal">
            <Img src="/images/loaderGif.gif" className="w-[50px]" alt="loading..."/>
            </div>
        </div>
    )
)

export default Component;