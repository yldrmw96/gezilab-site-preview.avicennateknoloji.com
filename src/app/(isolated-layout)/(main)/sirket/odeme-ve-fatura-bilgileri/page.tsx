import Spacer from "@/components/spacer";
import { cn } from "@/lib/utils";
import styles from "@/styles/safearea.module.css";
import Text from "@/components/text";
import {
  CreditCardIcon,
  BuildingIcon,
  ShieldCheckIcon,
  ClipboardCheckIcon,
  ArrowRightIcon
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OdemeVeFaturaBilgileriPage() {
  // Banka hesapları
  const bankAccounts = [
    {
      bank: "Ziraat Bankası",
      branch: "Ankara Çankaya Şubesi",
      accountName: "Marmice Turizm Organizasyon",
      iban: "TR12 0001 0012 3456 7890 1234 56",
      accountNo: "12345678901",
      currency: "TL"
    },
    {
      bank: "İş Bankası",
      branch: "Ankara Kızılay Şubesi",
      accountName: "Marmice Turizm Organizasyon",
      iban: "TR98 0006 4000 0011 2233 4455 66",
      accountNo: "11223344556",
      currency: "TL"
    },
    {
      bank: "Garanti BBVA",
      branch: "Ankara Tunalı Şubesi",
      accountName: "Marmice Turizm Organizasyon",
      iban: "TR87 0006 2000 1234 0000 1234 56",
      accountNo: "12340001234",
      currency: "TL"
    },
    {
      bank: "Ziraat Bankası",
      branch: "Ankara Çankaya Şubesi",
      accountName: "Marmice Turizm Organizasyon",
      iban: "TR12 0001 0012 3456 7890 1234 57",
      accountNo: "12345678902",
      currency: "USD"
    },
    {
      bank: "Ziraat Bankası",
      branch: "Ankara Çankaya Şubesi",
      accountName: "Marmice Turizm Organizasyon",
      iban: "TR12 0001 0012 3456 7890 1234 58",
      accountNo: "12345678903",
      currency: "EUR"
    }
  ];

  // Ödeme Yöntemleri
  const paymentMethods = [
    { icon: CreditCardIcon, name: "Kredi/Banka Kartı", description: "Tüm kredi kartlarına 3, 6 ve 9 taksit seçenekleri" },
    { icon: BuildingIcon, name: "Havale/EFT", description: "Banka hesaplarımıza doğrudan ödeme yapabilirsiniz" },
    { icon: ShieldCheckIcon, name: "Online Ödeme", description: "Güvenli 3D ödeme sistemi ile anında ödeme" },
    { icon: ClipboardCheckIcon, name: "Mail Order", description: "Uzaktan ödemeler için mail order formu ile ödeme" }
  ];

  return (
    <div className="flex flex-col">
      <Spacer />
      <section className={cn(styles.safe_area)}>
        <div className="flex flex-col items-center mb-10 text-center">
          <Text variant="handwriting">Finans</Text>
          <Text variant="heading">Ödeme ve Fatura Bilgileri</Text>
          <Text variant="paragraph" className="max-w-2xl mt-2">
            Gezilab olarak, müşterilerimize güvenli ve çeşitli ödeme seçenekleri sunmaktayız.
            Fatura bilgileri ve ödeme yöntemleri hakkında detaylı bilgiye bu sayfadan ulaşabilirsiniz.
          </Text>
        </div>

        <Tabs defaultValue="payment" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="payment">Ödeme Yöntemleri</TabsTrigger>
            <TabsTrigger value="bank">Banka Hesapları</TabsTrigger>
            <TabsTrigger value="invoice">Fatura Bilgileri</TabsTrigger>
          </TabsList>

          {/* Ödeme Yöntemleri */}
          <TabsContent value="payment">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="text-primary">
                      <method.icon size={36} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{method.name}</h3>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2">Ödeme Güvenliği</h3>
                <p className="text-sm text-gray-700">
                  Tüm ödeme işlemleriniz 128-bit SSL sertifikası ile korunmaktadır.
                  Kredi kartı bilgileriniz şifrelenmiş olarak iletilir ve sistemlerimizde saklanmaz.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Taksit Seçenekleri</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Anlaşmalı bankalarımız aracılığıyla kredi kartlarına 3, 6 ve 9 taksit imkanı sunmaktayız.
                  Tur paketleri ve özel kampanyalarda farklı taksit seçenekleri olabilir.
                </p>
                <div className="flex flex-wrap gap-3">
                  <img src="/img/normal/banks/visa.png" alt="Visa" className="h-8 w-auto" />
                  <img src="/img/normal/banks/mastercard.png" alt="MasterCard" className="h-8 w-auto" />
                  <img src="/img/normal/banks/troy.png" alt="Troy" className="h-8 w-auto" />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Banka Hesapları */}
          <TabsContent value="bank">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  Havale/EFT ile yapacağınız ödemelerde açıklama kısmına rezervasyon numaranızı belirtmeyi unutmayınız.
                  Ödemeniz yapıldıktan sonra dekontunuzu <Link href="mailto:finans@gezilab.com" className="text-primary hover:underline">finans@gezilab.com</Link> adresine gönderebilirsiniz.
                </p>
              </div>

              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Banka</TableHead>
                      <TableHead>Şube</TableHead>
                      <TableHead>Hesap Adı</TableHead>
                      <TableHead>IBAN</TableHead>
                      <TableHead>Hesap No</TableHead>
                      <TableHead>Para Birimi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bankAccounts.map((account, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{account.bank}</TableCell>
                        <TableCell>{account.branch}</TableCell>
                        <TableCell>{account.accountName}</TableCell>
                        <TableCell className="font-mono text-xs whitespace-nowrap">{account.iban}</TableCell>
                        <TableCell>{account.accountNo}</TableCell>
                        <TableCell>{account.currency}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          {/* Fatura Bilgileri */}
          <TabsContent value="invoice">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Fatura Düzenleme</h3>
                <p className="text-sm text-gray-700">
                  Bireysel müşterilerimize seyahat hizmeti faturası, kurumsal müşterilerimize ise firmanın talep ettiği fatura bilgilerine göre fatura düzenlenmektedir.
                  Tüm faturalarımız elektronik fatura (e-fatura/e-arşiv) olarak düzenlenmektedir.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Kurumsal Fatura Bilgisi Gönderimi</h3>
                <p className="text-sm text-gray-700">
                  Kurumsal müşterilerimizin fatura bilgilerini, seyahat/tur başlangıç tarihinden en geç 2 iş günü öncesine kadar iletmeleri gerekmektedir.
                  Fatura bilgilerinizi aşağıdaki yöntemlerden biriyle iletebilirsiniz:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                  <li>E-posta: <Link href="mailto:finans@gezilab.com" className="text-primary hover:underline">finans@gezilab.com</Link></li>
                  <li>Telefon: <Link href="tel:03124197353" className="text-primary hover:underline">0312 419 73 53</Link></li>
                  <li>Web Sitesi: <Link href="/bize-ulasin" className="text-primary hover:underline">İletişim Formu</Link></li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Bireysel Fatura Bilgileri</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2 items-start">
                      <ArrowRightIcon size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Ad Soyad (T.C. Kimlik Numarası ile)</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ArrowRightIcon size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Adres Bilgileri (İl, İlçe, Mahalle, Sokak, No)</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ArrowRightIcon size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>E-posta Adresi (E-Arşiv faturası için)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Kurumsal Fatura Bilgileri</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2 items-start">
                      <ArrowRightIcon size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Firma Ünvanı</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ArrowRightIcon size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Vergi Dairesi ve Vergi Numarası</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ArrowRightIcon size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Firma Adresi (İl, İlçe, Mahalle, Sokak, No)</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <ArrowRightIcon size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>E-Fatura Adresi / E-posta Adresi</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-semibold mb-2 text-yellow-800">Önemli Bilgilendirme</h3>
                <p className="text-sm text-yellow-800">
                  Fatura bilgilerinizi zamanında ve eksiksiz iletmeniz önemlidir. Seyahat başlangıç tarihinden sonra fatura bilgilerinde değişiklik yapılamamaktadır.
                  Fatura bilgilerinizin doğruluğundan ve vergi yükümlülüklerinden yolcu sorumludur.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className=" p-8 rounded-xl mt-8 mb-4 text-center">
          <Text variant="subheading" className="mb-2">Ödeme Desteği İçin</Text>
          <p className="text-gray-700 mb-4">Ödeme işlemleri veya fatura konusunda yardıma ihtiyacınız olursa bizimle iletişime geçebilirsiniz.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="tel:03124197353" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              0312 419 73 53
            </Link>
            <Link href="mailto:finans@gezilab.com" className="inline-block bg-white border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary/5 transition-colors">
              E-posta Gönder
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}