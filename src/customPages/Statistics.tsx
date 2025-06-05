import {
  Button,
  SearchBar,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@firecms/ui';

export const StatisticsPage = () => {
  return (
    <div className='bg-[--fcms-primary-bg] h-full'>
      <h1 className='text-2xl text-center'>statistics custom page</h1>

      <SearchBar onTextSearch={(text) => console.log('Search:', text)} />

      <Button onClick={() => console.log('Button clicked')}>Medium</Button>

      <Table>
        <TableHeader>
          <TableCell header scope='col'>
            Name
          </TableCell>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Микола</TableCell>
            <TableCell>300000</TableCell>
            <TableCell>Харків</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
