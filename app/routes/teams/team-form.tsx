import FullDivider from "~/component/divider/FullDivider";
import {Dialog, DialogContent,} from "~/component/ui/dialog";
import {useNavigate} from "@remix-run/react";
import SlideOverHeader from "~/component/sideover/sidebar-header";
import {withYup} from "@rvf/yup";
import * as yup from "yup";
import {useForm} from "@rvf/react";
import TextInput from "~/component/form-controls/input/text-input";
import TextArea from "~/component/form-controls/textarea/text-area";

const validator = withYup(
    yup.object({
        name: yup.string().required("Team name is required field"),
        description: yup.string().min(10,"Team description must be at least 20 characters").required("Team email is required"),
    }),
)

export default function TeamForm() {
    const navigation = useNavigate();
    const handleClose = () => {
        navigation(-1)
    };

    const form = useForm({
        validator,
    });

    return (
        <Dialog
            open={true}
            onOpenChange={(open: boolean) => {
                open ? () => {
                } : handleClose();
            }}>
            <DialogContent className="w-[32rem]">
                <SlideOverHeader title={`Add team`} onClose={() => handleClose()}/>
                <form {...form.getFormProps()} >
                    <div className={"px-4 py-4 space-y-6"}>
                        <TextInput name="name" label={"Name"} errorMessage={form.error("name")}/>
                        <TextArea rows={4} name={"description"} label={"Description"} errorMessage={form.error("description")}/>
                    </div>
                    <FullDivider/>
                    <div className={"flex justify-end px-5 gap-4 py-4 bg-gray-50"}>
                        <button type="button" className="py-2 px-3 outlined-button">cancel</button>
                        <button type="submit" className="py-2 px-3 small-button ">Save</button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}