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
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { sendEmail } from '@/lib/actions'

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().max(2000, {
    message: 'Your message cannot be longer than 2000 characters',
  }),
})

export const ContactCard = () => {
  const [pending, setPending] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false)
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
    setEmailSent(true)
    form.reset()
    setPending(false)
  }
  return (
    <Card>
      {emailSent ? (
        <div className="w-full h-full flex justify-center items-center py-32">
          <div className="flex flex-row gap-2 items-center font-semibold">
            <CheckCircle2 size={24} />
            Email sent!
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="flex flex-col gap-6">
              <CardHeader className="p-0">
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>
                  Send me a message and let&apos;s connect! Just leave your
                  email so I can reply to you.
                </CardDescription>
              </CardHeader>
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
                <Button disabled={pending} type="submit" className="w-full">
                  {pending ? (
                    <Loader2 size={16} className="animtate-spin" />
                  ) : (
                    <div className="flex flex-row gap-2 items-center">
                      <div>Send</div>
                      <Send size={16} />
                    </div>
                  )}
                </Button>
              </CardFooter>
            </CardContent>
          </form>
        </Form>
      )}
    </Card>
  )
}
