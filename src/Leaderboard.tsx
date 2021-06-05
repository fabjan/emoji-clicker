import { useEffect } from 'react';
import { Table, Spinner } from 'reactstrap';

import { apiBaseUrl, fetchTimeout } from './Config';
import { useGetLeaderboard } from './mmocg-client/mmocg';

const Leaderboard = () => {

    // TODO use a context provider for mocking?
    const { data: leaderboard, refetch, isLoading } = useGetLeaderboard({ axios: { baseURL: apiBaseUrl } });

    useEffect(() => {
        setTimeout(() => {
            refetch();
        }, fetchTimeout);
    }, [refetch]);

    const spinner = <Spinner type="grow" />;
    let tableRows = [
        <tr key="loading">
            <td>{spinner}</td>
            <td>
                {spinner}{spinner}{spinner}
            </td>
        </tr>
    ];


    if (!isLoading) {
        if (leaderboard?.status === 200) {
            // TODO live updating?
            const teamData = leaderboard?.data || [];
            tableRows = teamData
                .filter(({ id }) => id)
                .map(({ id, clicks }) =>
                    <tr key={id}>
                        <th scope="row">{clicks}</th>
                        <td>{id}</td>
                    </tr>
                );
        } else {
            tableRows = [
                <tr key="error">
                    <td>error</td>
                    <td>Could not get leaderboard data</td>
                </tr>
            ];
        }
    }

    return (
        <>
            <h2>Leaderboard</h2>
            <Table hover>
                <thead>
                    <tr>
                        <th>Clicks</th>
                        <th>Team Name</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        </>
    )
}

export default Leaderboard;
