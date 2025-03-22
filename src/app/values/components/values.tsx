import { BadgeCheck, Clock, Gavel, HandHeart, Heart } from 'lucide-react'

export const Values = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <Heart size={32} />
        <h3 className="text-xl font-semibold">Charity</h3>
        <p>
          Charity is the supreme attribute. I will love God and love others. No
          matter the situation, I can show charity towards others. I will not
          let a problem to be solved become more important than a person to be
          loved.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Gavel size={32} />
        <h3 className="text-xl font-semibold">Fairness</h3>
        <p>
          I will be fair in my actions and words. I will not form opinions of a
          matter before hearing all sides. I will do my best to be fair in my
          analysis of situations.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <BadgeCheck size={32} />
        <h3 className="text-xl font-semibold">
          Integrity, Honesty, and Dependability
        </h3>
        <p>
          I will follow through on commitments that I make to God and to others.
          If I foresee a problem, I will make that known before making the
          commitment. I will be honest in my dealings with others.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Clock size={32} />
        <h3 className="text-xl font-semibold">Patience</h3>
        <p>
          I will not allow any matter, no matter how serious, to cause me to
          lose my patience. I will maintain composure and take life as it comes.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <HandHeart size={32} />
        <h3 className="text-xl font-semibold">Generosity</h3>
        <p>
          Through my own means—love, service, time, finances, etc.—I will be
          generous in giving what I have to those in need.
        </p>
      </div>
    </div>
  )
}
