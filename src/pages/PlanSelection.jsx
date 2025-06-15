
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Flower2, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const { toast } = useToast();

  const plans = [
    {
      id: "essencial",
      name: "Acesso Essencial",
      price: "R$97",
      features: [
        "Acesso vitalício ao curso completo",
        "Conteúdo 100% online, aulas em vídeo",
        "Técnicas exclusivas de Pompoarismo",
        "Grupo exclusivo de alunas no WhatsApp",
        "Atualizações futuras sem custo"
      ]
    },
    {
      id: "premium",
      name: "Experiência Premium",
      price: "R$197",
      features: [
        "Tudo do Essencial",
        "2 encontros ao vivo para tirar dúvidas",
        "Material bônus: e-books e playlists de exercícios",
        "Acesso prioritário à instrutora",
        "Acompanhamento personalizado por 30 dias"
      ]
    },
    {
      id: "vip",
      name: "VIP Transformação Total",
      price: "R$497",
      features: [
        "Tudo do Premium",
        "Sessão individual online com a instrutora",
        "Mentoria exclusiva por 60 dias",
        "Certificado especial Maestria do Pompoar",
        "Presente surpresa enviado para sua casa"
      ]
    },
  ];

  const handlePurchase = () => {
    setIsPurchasing(true);
    // Simular processamento de pagamento
    setTimeout(() => {
      setIsPurchasing(false);
      setPurchaseComplete(true);
      toast({
        title: "Inscrição Realizada!",
        description: `Parabéns! Agora você faz parte da Maestria do Pompoar, com o plano ${plans.find(p => p.id === selectedPlan).name}. Prepare-se para uma transformação incrível!`,
        duration: 5000,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-900 to-fuchsia-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Escolha seu Plano e Dê o Primeiro Passo!</h1>
        <div className="max-w-3xl mx-auto">
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id} className={`bg-white bg-opacity-10 border-2 ${selectedPlan === plan.id ? 'border-pink-400' : 'border-transparent'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold">{plan.price} <span className="text-lg">à vista</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
                  <Label htmlFor={plan.id} className="flex items-center justify-center w-full cursor-pointer">
                    <Button variant={selectedPlan === plan.id ? "default" : "outline"} className="w-full">
                      {selectedPlan === plan.id ? "Selecionado" : "Selecionar Plano"}
                    </Button>
                  </Label>
                </CardFooter>
              </Card>
            ))}
          </RadioGroup>

          <Card className="mt-12 bg-white bg-opacity-10">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Flower2 className="h-7 w-7 text-pink-400" /> Informe seus dados para finalizar a inscrição
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" placeholder="Seu sobrenome" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Cartão de Crédito</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Validade</Label>
                  <Input id="expiryDate" placeholder="MM/AA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {!purchaseComplete ? (
                <Button className="w-full" onClick={handlePurchase} disabled={isPurchasing}>
                  {isPurchasing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    "Finalizar Inscrição"
                  )}
                </Button>
              ) : (
                <div className="text-center w-full">
                  <Check className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-lg font-semibold">Inscrição realizada com sucesso!</p>
                  <p>Bem-vinda à Maestria do Pompoar. Seu acesso será enviado para o e-mail cadastrado.</p>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
