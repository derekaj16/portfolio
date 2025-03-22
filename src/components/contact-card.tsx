'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { CheckCircle2, ChevronDown, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { sendEmail } from '@/lib/actions'
import { toast } from 'sonner'

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().max(2000, {
    message: 'Your message cannot be longer than 2000 characters',
  }),
})

export const ContactCard = () => {
  const [pending, setPending] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setPending(true)
    await sendEmail(values.email, values.message)
    form.reset()
    setPending(false)
    toast('Email sent!', {
      description: 'I will get back to you as soon as possible.',
    })
  }
  return (
    <div className="w-full max-w-2xl mx-auto mt-16">
      <Card
        className={`${
          !open && 'hover:bg-muted transition cursor-pointer pb-2'
        } w-full`}
        onClick={() => !open && setOpen(true)}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="flex flex-col gap-6">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl">Contact Me</CardTitle>
                <CardDescription>
                  Send me a message and let&apos;s connect!
                </CardDescription>
                {!open && <ChevronDown size={20} className="mx-auto mt-4" />}
              </CardHeader>
              {open && (
                <>
                  <div className="flex flex-col gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <CardFooter className="p-0">
                    <Button
                      disabled={pending}
                      type="submit"
                      className="w-full cursor-pointer"
                    >
                      {pending ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <div className="flex flex-row gap-2 items-center">
                          <div>Send</div>
                          <Send size={16} />
                        </div>
                      )}
                    </Button>
                  </CardFooter>
                </>
              )}
            </CardContent>
          </form>
        </Form>
      </Card>
    </div>
  )
}
