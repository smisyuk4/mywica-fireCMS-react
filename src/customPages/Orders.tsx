import {
  Button,
  SearchBar,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@firecms/ui';

export const OrdersPage = () => {
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
            <TableCell>Микола</TableCell>
            <TableCell>300000</TableCell>
            <TableCell>Харків</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Тетянка</TableCell>
            <TableCell>25000</TableCell>
            <TableCell>Вінниця</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Василинка</TableCell>
            <TableCell>15000</TableCell>
            <TableCell>Сімферополь</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
