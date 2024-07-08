const APIInfo = ({ url }: { url: string | undefined }) => {
    let url_: string = url ? url : "";

    const aux_type: string = url_.toUpperCase().split(".").pop()!;
    let type = ["YAML", "YML", "JSON"].includes(aux_type) ? aux_type : "API";

    return <>
        <div className="api-type"><p>{type}</p></div>
    </>
}

export default APIInfo;