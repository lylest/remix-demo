import React, {FC} from "react";

interface Props {
     children:React.ReactNode;
}
const ModalFit:FC<Props> =({ children})=> {
    return (
        <div className={"w-full lg:w-[30rem]  modal-container "}>
            {children }
        </div>
    )
}

export default ModalFit