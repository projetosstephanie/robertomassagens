"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  MessageCircle,
  Star,
  Clock,
  DollarSign,
  CheckCircle,
  Briefcase,
  Home,
  Instagram,
  Shield,
  Heart,
  Activity,
  Zap,
  Users,
  TrendingUp,
  Award,
  Smile,
  Target,
} from "lucide-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    name: "Maria Silva",
    rating: 5,
    comment: "Excelente profissional! A massagem relaxante foi incrível e o Roberto é muito atencioso. Recomendo!",
  },
  {
    name: "João Santos",
    rating: 5,
    comment: "Serviço impecável! Muito prático ter o atendimento em casa com toda estrutura necessária.",
  },
  {
    name: "Ana Paula",
    rating: 5,
    comment: "Melhor massagem que já fiz! O Roberto é super profissional e pontual. Já agendei a próxima sessão.",
  },
  {
    name: "Carlos Eduardo",
    rating: 5,
    comment: "Contratei para nossa empresa e todos adoraram! Excelente para bem-estar corporativo.",
  },
  {
    name: "Fernanda Costa",
    rating: 5,
    comment: "Profissional dedicado e competente. A massagem aliviou todas as minhas tensões. Muito obrigada!",
  },
  {
    name: "Ricardo Almeida",
    rating: 5,
    comment: "Atendimento de primeira qualidade! Pontual, educado e muito profissional. Super recomendo!",
  },
]

const carouselImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_cq2lm3cq2lm3cq2l-uO0QVJx54uv4Yw0nQo2sPm38xDTJiC.png",
    alt: "Roberto realizando massagem relaxante em cliente",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_u6jaeau6jaeau6ja-n6JL5MURXdo7Z8SP97xoROF8gyt4UO.png",
    alt: "Roberto Oliveira - Massoterapeuta profissional",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_cl17pocl17pocl17-h1aCYTG4hIBRZ8vmTrn7UG2vAq9WgP.png",
    alt: "Ambiente profissional de massagem",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_f1mb12f1mb12f1mb-PFksuAzvHRGU9h0PMn5POSzbJbbr2B.png",
    alt: "Atendimento personalizado de massoterapia",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_gtorqxgtorqxgtor-zjrhcCLTtjtyvMzc1CQDmYYaxdcjHO.png",
    alt: "Massagem terapêutica profissional",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_5nrr7o5nrr7o5nrr-EPN2zXBWionq0udz3KSHQMZt3mCwSd.png",
    alt: "Bem-estar corporativo e massagem em empresas",
  },
]

export default function MassageLandingPage() {
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    cep: "",
    bairro: "",
    idade: "",
    whatsapp: "",
    redeSocial: "",
    observacoes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppClick = () => {
    const message = `Olá, Roberto! Essas são minhas informações, quero agendar uma massagem agora!

Nome: ${formData.nome}
Endereço: ${formData.endereco}
CEP: ${formData.cep}
Bairro: ${formData.bairro}
Idade: ${formData.idade}
WhatsApp: ${formData.whatsapp}
Rede Social: ${formData.redeSocial}
Observações: ${formData.observacoes}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5511982130898?text=${encodedMessage}`, "_blank")
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleWhatsAppClick()
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="container relative mx-auto px-6 py-12 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_cq2lm3cq2lm3cq2l-uO0QVJx54uv4Yw0nQo2sPm38xDTJiC.png"
                  alt="Roberto Santos - MASSAGISTA Profissional"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary bg-muted shadow-lg">
                  <Image src="/profile-roberto.png" alt="Roberto Santos" fill className="object-contain" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <Briefcase className="h-4 w-4" />
                    <span>Massagem Corporativa</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                    <Home className="h-4 w-4" />
                    <span>Massagens Individuais a Domicílio</span>
                  </div>
                </div>
              </div>

              <h1 className="mb-6 text-balance text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Massagens Roberto
              </h1>

              <p className="mb-8 text-balance text-xl text-muted-foreground md:text-2xl">
                Quick Massagem Corporativa – Um cuidado que transforma seu dia em apenas 15 minutos!
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sessões Rápidas de 15 Minutos</h3>
                    <p className="text-sm text-muted-foreground">
                      Perfeitas para recarregar as energias no meio da rotina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <DollarSign className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Valores Acessíveis e Flexíveis</h3>
                    <p className="text-sm text-muted-foreground">
                      Entre em contato para uma cotação personalizada e descubra nossas condições especiais
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              O que é Quick Massage?
            </h2>
            <p className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A Quick Massage é uma massagem rápida, geralmente de <strong>15 a 30 minutos</strong>, realizada em uma
              cadeira específica para aliviar estresse e tensão muscular, melhorar a circulação e aumentar a disposição.
              Ideal para pessoas com pouco tempo, sendo muito usada em <strong>ambientes corporativos e eventos</strong>{" "}
              para promover bem-estar e produtividade.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="mb-12 rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 md:p-12">
              <h3 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
                Benefícios para a Saúde
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: Heart,
                    title: "Alívio do Estresse",
                    description: "Proporciona relaxamento imediato e melhora o humor",
                  },
                  {
                    icon: Activity,
                    title: "Melhora da Circulação",
                    description: "Ativa a circulação sanguínea e reduz inchaços",
                  },
                  {
                    icon: Zap,
                    title: "Redução de Dores",
                    description: "Alivia tensões musculares no pescoço, ombros e costas",
                  },
                  {
                    icon: Shield,
                    title: "Sistema Imunológico",
                    description: "Fortalece as defesas naturais do corpo",
                  },
                ].map((benefit, index) => (
                  <Card key={index} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                          <benefit.icon className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <h4 className="mb-2 font-semibold text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
                Para que Serve a Quick Massage?
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: Smile,
                    title: "Alívio do Estresse e Ansiedade",
                    description: "Proporciona relaxamento imediato e melhora o humor",
                  },
                  {
                    icon: Target,
                    title: "Redução da Tensão Muscular",
                    description: "Relaxa músculos do pescoço, ombros e costas, aliviando nós e dores",
                  },
                  {
                    icon: Activity,
                    title: "Melhora da Circulação",
                    description: "Ativa a circulação sanguínea local, reduzindo inchaços e revitalizando o corpo",
                  },
                  {
                    icon: Zap,
                    title: "Aumento da Disposição",
                    description: "Revitaliza a energia e a disposição física e mental",
                  },
                  {
                    icon: Users,
                    title: "Melhora da Postura",
                    description: "Alivia pontos de tensão que afetam a postura corporal",
                  },
                  {
                    icon: Shield,
                    title: "Prevenção de LER/DORT",
                    description: "Combate lesões por esforços repetitivos e distúrbios osteomusculares",
                  },
                  {
                    icon: TrendingUp,
                    title: "Aumento da Produtividade",
                    description: "O relaxamento leva a um ambiente mais positivo e produtivo",
                  },
                  {
                    icon: Award,
                    title: "Pausas Ativas",
                    description: "Momentos de recuperação durante a jornada de trabalho",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                        <item.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-muted/50 p-8 md:p-12">
              <h3 className="mb-6 text-center text-2xl font-semibold text-foreground md:text-3xl">
                Como Funciona a Técnica?
              </h3>
              <div className="mx-auto max-w-3xl space-y-4 text-center">
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  A Quick Massage é realizada com o cliente <strong>sentado em uma cadeira específica</strong>,
                  geralmente <strong>sem a necessidade de tirar a roupa</strong>. O terapeuta utiliza movimentos e
                  pressões inspirados em técnicas orientais, como o <strong>Shiatsu e Anmá</strong>.
                </p>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Com os <strong>dedos, palmas e cotovelos</strong>, o MASSAGISTA trabalha as áreas de maior tensão,
                  proporcionando alívio imediato e restaurando o equilíbrio do corpo e da mente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Benefícios Imediatos
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">Transforme seu dia com a Quick Massagem</p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CheckCircle,
                title: "Alívio Rápido do Estresse",
                description: "Reduza a tensão e ansiedade em minutos",
              },
              {
                icon: CheckCircle,
                title: "Melhora da Circulação",
                description: "Estimule o fluxo sanguíneo e oxigenação",
              },
              { icon: CheckCircle, title: "Redução de Tensões", description: "Alivie dores musculares e rigidez" },
              { icon: CheckCircle, title: "Mais Produtividade", description: "Aumente o foco e bem-estar no trabalho" },
            ].map((benefit, index) => (
              <Card key={index} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Corporativos Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Benefícios Corporativos
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Transforme o ambiente de trabalho da sua empresa
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Pausas Ativas",
                description: "Momentos de recuperação durante o expediente",
              },
              {
                icon: Award,
                title: "Reconhecimento",
                description: "Valorização e cuidado com os colaboradores",
              },
              {
                icon: Smile,
                title: "Clima Organizacional",
                description: "Ambiente de trabalho mais positivo e saudável",
              },
              {
                icon: TrendingUp,
                title: "Redução do Absenteísmo",
                description: "Menos faltas e maior engajamento da equipe",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <benefit.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Como Funciona
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">Simples, rápido e eficiente</p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Agende o Horário",
                description: "Escolha o melhor momento ou encaixe no seu expediente",
              },
              {
                step: "2",
                title: "Atendimento no Local",
                description:
                  "Massagem no trabalho, casa ou onde preferir. Cadeira ergonômica, sem necessidade de tirar a roupa",
              },
              {
                step: "3",
                title: "Relaxamento Imediato",
                description: "Técnicas de pressão e alongamento proporcionam disposição instantânea",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-pretty text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Galeria
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">Conheça nosso trabalho e ambiente profissional</p>
          </div>

          <div className="mx-auto max-w-7xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-muted shadow-lg transition-transform hover:scale-105">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 h-12 w-12 rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-background" />
              <CarouselNext className="right-4 h-12 w-12 rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-background" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Avaliações dos Clientes
            </h2>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-medium text-muted-foreground">5.0 • {testimonials.length} avaliações</span>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">{testimonial.comment}</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Agende Sua Sessão
              </h2>
              <p className="text-pretty text-lg text-muted-foreground">Preencha o formulário e entraremos em contato</p>
            </div>

            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="mb-2 block text-sm font-medium text-foreground">
                      Nome Completo
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="rounded-lg border-border bg-background"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-foreground">
                        WhatsApp
                      </Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="rounded-lg border-border bg-background"
                        placeholder="(11) 98888-8888"
                      />
                    </div>

                    <div>
                      <Label htmlFor="idade" className="mb-2 block text-sm font-medium text-foreground">
                        Idade
                      </Label>
                      <Input
                        id="idade"
                        name="idade"
                        value={formData.idade}
                        onChange={handleInputChange}
                        className="rounded-lg border-border bg-background"
                        placeholder="Sua idade"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="endereco" className="mb-2 block text-sm font-medium text-foreground">
                      Endereço Completo
                    </Label>
                    <Input
                      id="endereco"
                      name="endereco"
                      required
                      value={formData.endereco}
                      onChange={handleInputChange}
                      className="rounded-lg border-border bg-background"
                      placeholder="Rua, número, complemento"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="cep" className="mb-2 block text-sm font-medium text-foreground">
                        CEP
                      </Label>
                      <Input
                        id="cep"
                        name="cep"
                        required
                        value={formData.cep}
                        onChange={handleInputChange}
                        className="rounded-lg border-border bg-background"
                        placeholder="00000-000"
                      />
                    </div>

                    <div>
                      <Label htmlFor="bairro" className="mb-2 block text-sm font-medium text-foreground">
                        Bairro
                      </Label>
                      <Input
                        id="bairro"
                        name="bairro"
                        required
                        value={formData.bairro}
                        onChange={handleInputChange}
                        className="rounded-lg border-border bg-background"
                        placeholder="Seu bairro"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="redeSocial" className="mb-2 block text-sm font-medium text-foreground">
                      Instagram (opcional)
                    </Label>
                    <Input
                      id="redeSocial"
                      name="redeSocial"
                      value={formData.redeSocial}
                      onChange={handleInputChange}
                      className="rounded-lg border-border bg-background"
                      placeholder="@seu_instagram"
                    />
                  </div>

                  <div>
                    <Label htmlFor="observacoes" className="mb-2 block text-sm font-medium text-foreground">
                      Observações
                    </Label>
                    <Textarea
                      id="observacoes"
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleInputChange}
                      className="rounded-lg border-border bg-background"
                      placeholder="Alguma informação adicional ou preferência de horário"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full py-6 text-base shadow-lg">
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-primary bg-muted shadow-lg">
              <Image src="/profile-roberto.png" alt="Roberto Santos" fill className="object-contain" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-foreground">Roberto Santos</h3>
            <p className="mb-6 text-sm uppercase tracking-wide text-muted-foreground">MASSAGISTA Profissional</p>

            <div className="mb-6 flex items-center justify-center gap-6">
              <a
                href="https://www.instagram.com/roberto.massagem?igsh=MXJoYjEzdXl4engyeQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/5511982130898"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
              <Shield className="h-4 w-4" />
              <span>Site Seguro e Verificado</span>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-2xl transition-all hover:scale-110 hover:shadow-3xl"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </button>
    </div>
  )
}
