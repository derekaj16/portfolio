import { Languages } from 'lucide-react'

const LanguageLearning = () => {
  return (
    <div className="flex flex-col gap-2">
      <Languages size={32} />
      <h2 className="text-xl sm:text-2xl font-semibold">Learning Langauges</h2>
      <p>
        Programming languages aren&apos;t the only languages I like. I love
        learning other languages too. So far, I am fluent in:
      </p>
      <ul className="list-disc ml-6 my-2 flex flex-col gap-2">
        <li>Fijian</li>
      </ul>
      <p>And I am working on these languages:</p>
      <ul className="list-disc ml-6 my-2 flex flex-col gap-2">
        <li>Spanish</li>
        <li>French</li>
        <li>German</li>
      </ul>
      <p>
        If I had more time, I would also love to learn Arabic, Chinese or a
        language that doesn&apos;t use the English alphabet. I love learning
        languages because they allow you to understand people in a deeper and
        more meaningful way.
      </p>
    </div>
  )
}

export default LanguageLearning
