import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Flag,
  Icon,
  Input,
  Image,
  Header,
  Divider,
  Container,
  Label,
  Button,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br />
      <Grid container columns={5}>
        <Grid.Column width="1">
          <Flag name="id" />
        </Grid.Column>
        <Grid.Column width="1">
          <Icon name="angle left" />
        </Grid.Column>
        <Grid.Column width="1">
          <Icon name="angle right" />
        </Grid.Column>
        <Grid.Column width="11">
          <Input text="text" placeholder="Search.." icon="favorite" fluid />
        </Grid.Column>
        <Grid.Column width="2"textAlign="right">
          <Header>
            <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" circular/>
            Patrick
          </Header>
        </Grid.Column>
      </Grid>
      <Divider horizontal>SELAMAT DATANG!!!!</Divider>
      <Container textAlign="right">
        <Label color="teal" tag>SPORT</Label>
      </Container>
      <br/>
      <Container textAlign="center">
        <p>
          Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen
          aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan
          melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)? Suzuki, Honda,
          KTM, dan Aprilia memprotes penggunaan komponen aero di motor
          Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama
          MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso
          tampil sebagai pemenang usai mengalahkan Marc Marquez. Keempat tim
          meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan
          downforce, yang membantu motor melesat di trek. Sementara Ducati
          bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah
          disetujui Technical Director sebelum balapan. Pada awalnya, protes
          keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke
          Pengadilan Banding FIM. Sidang itu sendiri akan dilakukan sebelum seri
          kedua di Argentina digelar pada 29-31 Maret mendatang. Manajer umum
          Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen
          itu. Namun, seandainya pengadilan mengabulkan gugatan tersebut Ducati
          akan mempertimbangkan melanjutkan kasus ini ke CAS. "Di dalam
          federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus
          pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus ini
          Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada
          MotoGP.com. "Saya bahkan tidak ingin memikirkan sampai titik ini. Kami
          sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami
          tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan
          secara berbeda."
        </p>
        <Button icon labelPosition='left' color='teal'>
          <Icon name='plus'/>
          Tambah Tautan Ke List
          </Button>
      </Container>
    </div>
  );
}

export default App;
