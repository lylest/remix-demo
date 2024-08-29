import invariant from "tiny-invariant";
import {json, LoaderFunctionArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

export const loader = async (
    {
        params,
    }: LoaderFunctionArgs) => {
    invariant(params.teamId, "Missing teamId param");

    const team = { id: params.teamId }
    /*if (!contact) {
            throw new Response("Not contact Found", {status: 404});
        }*/
    return json({team});
};

//issues, members, with their commit the more commit on the top, repo, issues with status,  cta to add issues, commit tiemline
export default function RouteTeamId() {
    const { team} = useLoaderData<typeof loader>();
    console.log(team)
    return (
        <div>
            Teamd details
        </div>
    )
}