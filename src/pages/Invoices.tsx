import {
  Button,
  SearchBar,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@firecms/ui';

const InvoicesPage = () => {
  return (
    <div className='bg-[--fcms-primary-bg] h-full'>
      <h1 className='text-2xl text-center'>invoices custom page</h1>

      <SearchBar onTextSearch={(text) => console.log('Search:', text)} />

      <Button onClick={() => console.log('Button clicked')}>Medium</Button>

      <Table>
        <TableHeader>
          <TableCell header scope='col'>
            Name
          </TableCell>
          <TableCell header scope='col'>
            Age
          </TableCell>
          <TableCell header scope='col'>
            City
          </TableCell>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>30</TableCell>
            <TableCell>New York</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>25</TableCell>
            <TableCell>San Francisco</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoicesPage;
