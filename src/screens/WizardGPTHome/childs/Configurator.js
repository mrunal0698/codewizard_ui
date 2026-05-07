const Component = ({ url }) => {

    return (
        <div className="w-full h-full transform">
            <iframe
                src={url}
                className="w-full h-full border-0 rounded-md"
                title="Preview"
            />
        </div>
    );
};

export default Component;