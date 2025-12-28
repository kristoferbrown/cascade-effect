// import { useContext } from "react";
// import { RulebookContext } from "../context/rulebookContext";
// import Break from "../components/break/break";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import Section from "../components/section/section";
// import Pair from "../components/metabolism/pair";
// import Crosslink from "../components/crosslink/crosslink";
// import Metabolism from "../components/metabolism/metabolism";

function ChapterGameplay() {
  // const { topicMap } = useContext(RulebookContext);
  // const linkMap = topicMap.current;

  return (
    <Section
      coordinates={"3"}
      header="Gameplay"
      introContent={
        <ChapterIntroSpread
          chapterNumber={3}
          title="Gameplay"
          leftPageContent={
            <>
              <h2>Physical Metabolisms</h2>
              <p>
                When your character attempts to overcome a challenge, you must decide how their physical body and mind
                rise to the occasion. This is represented by choosing one Physical Metabolism to use.{" "}
              </p>
              <div className="metabolism fight">
                <h3>Using Fight</h3>
                <p>Fight is your ability to change the world.</p>
                <p>
                  Use Fight any time you are trying to affect, move, harm, or influence something. In combat, attacks
                  use Fight. Fight is useful in athletic activities that involve anaerobic bursts like lifting or
                  jumping, social activities like intimidation, persuasion, or leadership, and mental tasks that involve
                  finding "brute force" solutions all favor Fight.
                </p>
              </div>
              <div className="metabolism flight">
                <h3>Using Flight</h3>
                <p>Flight is your ability to avoid or resist the world.</p>
                <p>
                  Use Flight any time you are trying to avoid danger, endure hardship, or traverse your environment. In
                  combat, defenses use Flight. Flight is useful in athletic activities involving sustained aerobic
                  exertion like climbing or distance running, social activities like setting boundaries, maintaining
                  composure, or avoiding embarrassment, and mental activities like identifying tricks or finding escape
                  routes.
                </p>
              </div>
              <div className="metabolism focus">
                <h3>Using Focus</h3>
                <p>Focus is your ability to understand the world.</p>
                <p>
                  Use Focus any time you want to pay attention, notice a detail, find a pattern, or be in the right
                  place at the right time. In combat, initiative uses Focus. Focus is useful in athletic activities that
                  require strategy or prediction, social skills like being witty or reading others, and mental skills
                  that involve observation, deduction, memory, attention, or complexity.{" "}
                </p>
              </div>
            </>
          }
          rightPageContent={
            <>
              <h2>Hidden Metabolisms</h2>
              <p>
                Similarly, the hidden body also applies resources to every challenge you face. You must choose which
                Hidden Metabolism is used.
              </p>
              <div className="metabolism self">
                <h3>Using Self</h3>
                <p>Self is the hidden body's ability to empower the physical body.</p>
                <p>
                  Use Self any time you are trying to push your body beyond its normal limits. This includes unarmed
                  combat, a wide range of athletic activities involving power, endurance, or adrenaline, as well as
                  social activities or mental activities that require willpower, patience, or managing your emotions.{" "}
                </p>
              </div>
              <div className="metabolism near">
                <h3>Using Near</h3>
                <p>Near is the hidden body's ability to sense and influence your immediate surroundings.</p>
                <p>
                  Use Near any time you are trying to interact with your surroundings with finesse, speed, and
                  precision. This includes armed melee content, athletic activities that involve skillful movements or
                  avoiding obstacles, social activities involving body language, and mental activities that involve
                  searching for connections between concepts.
                </p>
              </div>
              <div className="metabolism far">
                <h3>Using Far</h3>
                <p>Far is the hidden body's ability to sense and influence other people or distant objects.</p>
                <p>
                  Use Far any time you are trying to understand other people or interact with things outside of your
                  reach. This includes ranged combat, athletic activities that involve situational awareness, good aim,
                  or predicting opponents, social activities that involve empathizing with or predicting others, and
                  mental activities that involve an eye for details or making predictions.
                </p>
              </div>
            </>
          }
        />
      }
    >
      <Section header="Challenges">
        <p>
          Typically you can just describe what your character does in any situation. However, if an action or event
          involves exertion, risk, or the possibility of failure, it needs to be resolved as a Challenge. While
          resolving a Challenge, the GM will describe its difficulties in the form of Goals and a player will use their
          character's Metabolisms to create Progress towards meeting these Goals.
        </p>
        <Section header="Step by Step Challenges" isInset>
          <ol>
            <li>The GM describes the context of the Challenge: its Goal, Effort, and Risk.</li>
            <li>The player determines which pair of Metabolisms to use.</li>
            <li>The player attempts to find Advantage and avoid Disadvantage.</li>
            <li>The player allocates the Effort by deciding how many Metabolism points to use.</li>
            <li>The player resolves the Risk by rolling dice and counting how much Progress was produced.</li>
            <li>The player applies Progress to Goals to determine the results.</li>
            <li>The GM describes the outcome.</li>
          </ol>
        </Section>
        <Section header="Setting Up a Challenge">
          <p>
            The context of a Challenge is set and described by the GM and includes any relevant details about the nature
            of the Challenge and how it might be resolved. The only required element of context is a Goal, but it may
            also include Risk or Effort levels.
          </p>
          <Section header="Goals">
            <p>
              A Goal is the target number representing the difficulty of the Challenge. If you can match or beat this
              number while applying Progress to the Goal, then you accomplish the it successfully.{" "}
            </p>
            <Section header="Hidden Goals">
              <p>
                Typically, the GM will tell you the exact target number for the Goal and give you a clear idea what
                happens if you succeed or fail at accomplishing it. However, if your character has incomplete
                information about the situation the GM may only give you hints about how difficult it is and the
                consequences. Additionally, when your character is actively being resisted by someone the target number
                may be determined by that person's stats or actions.
              </p>
              <p>
                For example, if you're trying to jump across a gap in the dark, you may not be able to clearly see how
                difficult the jump is, part of the danger of the Challenge is acting without this information.{" "}
              </p>
            </Section>
            <Section header="Multiple Goals">
              <p>
                Most Challenges have a single clear Goal. However, complex Challenges may sometimes have multiple Goals.
                Each can have a different target number and different consequences of success or failure. Apply Progress
                to the Goals separately, depending on how much you were able to get you may succeed on all of the Goals
                or a only portion of them.
              </p>
              <p>
                For example, gaining access to a secure building maybe have two Goals, one for getting into the building
                and one for remaining undetected by security. If you get enough Progress to accomplish one but not the
                other, you would need to choose which Goal is more important.
              </p>
            </Section>
            <Section header="Critical Success & Failure">
              <p>
                Most of the time, a Goal is simply pass or fail, you either get enough Progress to tie or you don't.
                However, some Goals may have degrees of success. In this case, a Goal may allow for critical success or
                critical failure, or both. If a goal allows for critical failure, there is an additional negative
                consequence for missing the Goal by 3 or more points. If it allows for critical success, there are
                additional positive effects if you exceed the Goal by 3 or more points than needed to simply succeed.{" "}
              </p>
              <p>
                For example, convincing the fearful townsfolk to evacuate before an unexpected disaster may have a
                difficulty of 5. On a normal failure they simply don't believe you and stay put, but getting 2 or less
                is a critical failure causing the people to turn against you and becomes hostile. On a normal success
                they believe you and start evacuating, but getting 8 or more is a critical success causing part of the
                crowd to begin actively helping you prepare for the upcoming event.
              </p>
            </Section>
            <Section header="Example Goal Difficulties" isInset>
              <p>
                <strong>1 - 3: Anyone can reliably do this if they try hard enough</strong>
              </p>
              <ul>
                <li>1: Tie a simple knot</li>
                <li>2: Climb a ladder</li>
                <li>3: Track a person in fresh mud</li>
              </ul>
              <p>
                <strong>4 - 6: Experts can reliably do this, others need extra effort or luck</strong>
              </p>
              <ul>
                <li>4: Discreetly tail a person in a crowd</li>
                <li>5: Haggle a in a crowded market</li>
                <li>6: Negotiate a high stakes corporate contract </li>
              </ul>
              <p>
                <strong>
                  7 - 12 Experts need extra effort or luck to do this, it's practically impossible for others
                </strong>
              </p>
              <ul>
                <li>8: Free-climb a sheer rock face</li>
                <li>10: Talk down a rioting crowd</li>
                <li>12: Defuse a bomb in under a minute</li>
              </ul>
              <p>
                <strong>12 - 18 Superhuman ability is required, but still appears plausible to witnesses</strong>
              </p>
              <ul>
                <li>14: Reconstruct a crime scene perfectly from a single clue</li>
                <li>16: Memorize a entire book in one reading</li>
                <li>18: Leap from one skyscraper rooftop to another</li>
              </ul>
              <p>
                <strong>
                  19+ Even with superhuman ability, extra effort and luck are needed. The attempt appears overtly
                  supernatural to witnesses
                </strong>
              </p>
              <ul>
                <li>20: Punch through a brick wall</li>
                <li>23: Isolate a whispered conversation in another room of a party</li>
                <li>26: Lift a truck</li>
              </ul>
            </Section>
          </Section>
          <Section header="Risk & Effort">
            <p>
              Risk and Effort determine how you resolve a Challenge. They each come in three levels, low, medium, and
              high. Medium is the default, if the rulebook or GM do not specify a level for either Risk or Effort, use
              medium.
            </p>
            <Section header="Setting Risk">
              <p>
                Risk represents how unpredictable the situation is. It determines if the player needs to roll dice when
                counting Progress. Use low Risk when the character can clearly sense and control how the outcome
                unfolds, they know how hard they need to try and will succeed if they do so. Use high Risk when there
                could be unforeseeable consequences, even when they character tries their hardest. Otherwise, most of
                the time use medium.
              </p>
              <p>
                For example, moving a heavy object is low Risk, you know how hard you have to try to do it. Hitting a
                moving target is medium Risk, you could still miss no matter how hard you try. Racing to climb a
                slippery drain pipe in the rain while being chased is high Risk, the conditions are working against you.
              </p>
            </Section>
            <Section header="Setting Effort">
              <p>
                Effort represents how much exertion the situation requires. It determines if the player needs to spend
                any Metabolism points they use. Use low Effort when the character can succeed without moving or talking
                much, often when they just need to notice or understand something. Use high Effort when a situation is
                truly exhausting and will take time to recover from. Otherwise, most of the time use medium.
              </p>
              <p>
                For example, remember or noticing something is low Effort, you don't need to actively do anything to
                succeed. Studying, convincing, sneaking, or climbing are all medium Effort, you are an active
                participant in these actions. Holding a collapsing ceiling off your pinned ally is high Effort, even if
                you succeed it is still stressful.
              </p>
            </Section>
            <Section header="Example Risk & Effort Levels" isInset>
              <table>
                <tr>
                  <td></td>
                  <td>
                    <strong>Low Effort</strong>
                  </td>
                  <td>
                    <strong>Medium Effort</strong>
                  </td>
                  <td>
                    <strong>High Effort</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Low Risk</strong>
                  </td>
                  <td>Noticing something</td>
                  <td>Studying, repairing, defending in combat</td>
                  <td>Physical, mental, or social endurance</td>
                </tr>
                <tr>
                  <td>
                    <strong>Medium Risk</strong>
                  </td>
                  <td>Knowing something common</td>
                  <td>Default, most other challenges, attacking in combat</td>
                  <td>Swimming against a current</td>
                </tr>
                <tr>
                  <td>
                    <strong>High Risk</strong>
                  </td>
                  <td>Knowing something esoteric</td>
                  <td>Navigating the unknown</td>
                  <td>Bad odds in a hostile environment</td>
                </tr>
              </table>
            </Section>
          </Section>
          <Section header="Additional Context">
            <p>
              The Goals, Risk, and Effort are the core factors defining a Challenge, but the GM should describe or
              answer questions about any additional information that may help you decide how to approach it. What are
              the consequences for failure? How much urgency is there? Will there be consequences if you take too much
              time? Would a certain approach give the characters an Advantage or Disadvantage? Are any Metabolisms ill
              suited for the task?
            </p>
            <p>
              When communicating this context to the players the GM should provide any relevant information that your
              character would be able to perceive.
            </p>
          </Section>
        </Section>
        <Section header="Taking Action">
          <p>
            Once you know the details of the Challenge's context, you must decide how you are going to face it. This is
            done by choosing the Metabolisms you will use and describing the actions you take.
          </p>
          <Section header="Choosing Metabolisms">
            <p>
              Your Metabolisms will always be used as a pair, one Physical and one Hidden. Every action you take, be it
              intellectual or athletic, requires physical and a hidden component.{" "}
            </p>
            <p>
              Most Challenges can potentially be accomplished with many different Metabolism pairings, so you can choose
              the pairing freely. You just have to describe how your character is handling the situation in a way that
              applies the chosen Metabolisms. In general, Physical Metabolisms represent how your character is acting
              and Hidden Metabolisms represent where the action is taking place.{" "}
            </p>
            <p>
              The GM has the final say over whether a description is sufficient to justify the chosen Metabolisms. If a
              pairing is poorly suited to the task you will get Disadvantage on the Challenge if you choose it. The GM
              should tell you this before you make the final choice. If the pairing is completely incompatibly with the
              task, the GM will not allow you to choose it at all.{" "}
            </p>
            <p>
              How strictly a Challenge favors certain Metabolisms depends on the situation. Often it is very flexible,
              but urgent situations may be more restrictive. In combat specifically, most Challenges will strictly
              require a specific choice for one or both Metabolisms. For example, to investigate a scene there are many
              viable approaches, and therefore many viable pairings, but to throw a punch, you must use Fight+Self, and
              to dodge a bullet you must use Flight+Far.
            </p>
            <Section header="Metabolism Pairing Example" isInset>
              <p>
                Your character is trying to sneak into a secure building, so you need to choose what Metabolism pairing
                you will use to attempt this Challenge. One pairing you could choose is Flight , to represent how you
                are moving quickly to avoid your pursuers, and Far to represent that you are trying to maintain
                awareness of the guard's movements to avoid getting too close. Alternatively, you could choose Focus, to
                represent watching closely for any security cameras, paired with Near, to represent how you are
                carefully interacting with your environment to remain silent.
              </p>
            </Section>
          </Section>
          <Section header="Advantage & Disadvantage">
            <p>
              The GM sets the initial Risk and Effort levels based on the inherent nature of the task and situation.
              However, you can attempt to change them by creating Advantage or Disadvantage. If the specific actions,
              preparations, or resources you describe using to attempt the Challenge are particularly effective or
              ineffective, the GM may give you Advantage or Disadvantage. If you choose a clever or effective approach,
              you gain Advantage. Conversely if your chosen Metabolism pairing is poorly aligned with the Challenge or
              you make poor choices in your approach, you gain Disadvantage. While others are attempting Challenges, if
              you have the time and ability to intervene, you can also attempt to grant them Advantage or inflict
              Disadvantage on them.
            </p>
            <p>
              If you have Advantage on a Challenge, you can choose to lower either the Risk or Effort level, making it
              easier to succeed. When someone intentionally inflicts Disadvantage, they choose which level, Risk or
              Effort, to increase for the person attempting the Challenge. In any other cases of Disadvantage, the GM
              will choose which to increase.
            </p>
            <p>
              A Challenge may only have a one instance of Advantage or Disadvantage, you can't apply either more than
              once. Having both Advantage and Disadvantage at the same time, no matter how many possible sources you
              have of one or the other, cancel each other out resulting in unchanged Risk and Effort levels.{" "}
            </p>
            <Section header="Advantage & Disadvantage Examples" isInset>
              <ul>
                <li>Get Advantage by having a relevant Trait.</li>
                <li>Get Advantage by using the right tool for the job.</li>
                <li>Get Advantage by having the element of surprise.</li>
                <li>Give Advantage by offering a helping hand.</li>
                <li>Give Advantage by supporting someone's talking points.</li>
                <li>Give Advantage by being a lookout.</li>
                <li>Get Disadvantage by using Fight in a Challenge that really needs Focus.</li>
                <li>Get Disadvantage by making a social blunder.</li>
                <li>Get Disadvantage by running into circumstance you didn't predict.</li>
                <li>Inflict Disadvantage by distracting someone.</li>
                <li>Inflict Disadvantage by refuting their argument.</li>
                <li>Inflict Disadvantage by standing in someone's way.</li>
              </ul>
            </Section>
          </Section>
          <Section header="Using Traits">
            <p>
              The most reliable way to gain Advantage is by applying a Trait. If you have one or more Traits that are
              relevant to the Challenge, you gain Advantage. Traits are relevant if they can somehow be leveraged to
              assist with the Challenge.
            </p>
            <p>
              For example, a Trait called Medical Training would be relevant in a Challenge about treating injuries,
              granting the character Advantage. Players and GMs are encouraged to be creative and flexible when deciding
              if Traits are relevant.
            </p>
            <Section header="Other Uses for Traits">
              <p>
                The GM may also use the characters' Traits to gate Challenges. For example, Challenges requiring expert
                knowledge may only be attempted by someone with a relevant Trait. For example, picking a lock isn't
                extremely hard, but the average person doesn't know where to start.
              </p>
              <p>
                Conversely, the GM may use the characters' Traits to skip Challenges entirely. For example, characters
                with a with a field of knowledge will just know things related to it and characters connected to a
                subculture will be aware of current events within it.
              </p>
            </Section>
            <Section header="Using Traits Examples" isInset>
              <ul>
                <li>The Trait "Mechanic" grants Advantage on Challenges to repair a car.</li>
                <li>The Trait "Streetwise" grants Advantage on Challenges to find a black-market.</li>
                <li>
                  Most people can't attempt to fly an experimental aircraft, but with the Trait "Pilot's License" you
                  can.
                </li>
                <li>Most people can't attempt influence a senator, but with the Trait "Lobbyist Contacts" you can.</li>
                <li>
                  If you have the Trait "Terminally Online" you don't need a Challenge to recognize a message hidden in
                  a series of memes.
                </li>
                <li>
                  If you have the Trait "Local Guide" you don't need a Challenge to plan the fastest shortcuts through
                  your town.
                </li>
              </ul>
            </Section>
          </Section>
          <Section header="Using Metabolisms">
            <p>
              Your Metabolisms are a resource you can spend. To track this, each has three measurements, score,
              capacity, and current. If your character is healthy and rested, these are all the same number. When you
              spend Metabolism points you are spending the current value and the way you spend them is determined by the
              Challenge's Effort level.
            </p>
            <Section header="Metabolism Score">
              <p>
                The Score is the number you set during character creation. It represents your raw potential, and the
                other values can never exceed it. It never changes during gameplay. It can only be permanently increased
                between sessions when you are spending experience points.
              </p>
            </Section>
            <Section header="Metabolism Capacity">
              <p>
                Capacity is the maximum usable value for the Metabolism. It starts at the same number as the Score and
                can never exceed it. Capacity can only be reduced by enduring Stress. It can typically only be restored
                through sleep.
              </p>
            </Section>
            <Section header="Current Metabolism">
              <p>
                Your current value for any Metabolism fluctuates rapidly during gameplay. When it is high you are ready
                to act and pay attention, when it is low you distracted and lazy. It starts at the same number as
                capacity and can never exceed it. You reduce it any time you spend metabolism points. It is restored to
                match its capacity at the end of every scene, and partially restored at the end of each combat round.
                You can also Push Yourself to use your willpower overcome the Current value.
              </p>
              <p>
                Current is the most frequently used value. If not specified otherwise, any change reference to a
                Metabolism value is referring to Current.
              </p>
            </Section>
          </Section>
          <Section header="Effort">
            <p>The Effort level determines how you use and spend your Metabolism points.</p>
            <Section header="Low Effort">
              <p>
                This challenge is effortless or allows you to set your own pace. The current value of every involved
                Metabolism is automatically allocated to this Challenge. You do not need to spend anything.
              </p>
            </Section>
            <Section header="Medium Effort">
              <p>
                The most common level. From each Metabolism involved in the Challenge, decide how many points you want
                to allocate, up to the current value. The points you use are spent, reducing the current value by the
                amount used.
              </p>
            </Section>
            <Section header="High Effort">
              <p>
                Attempting this strains your mind or body. This functions the same as medium Effort, however you must
                take one point of unavoidable Stress to one of your paired Metabolisms before you allocate use any
                points from it.
              </p>
            </Section>
          </Section>
          <Section header="Allocating Metabolisms Example" isInset>
            <p>
              You're trying to get from a hidden safe house to a destination that requires you to sneak across a
              restricted district undetected.
            </p>
            <p>
              First, you have a <strong>low Effort Challenge</strong> to see if you notice the gap in the patrols while
              watching them through binoculars. You choose to use Focus and Far to do so. Focus has 3 current points and
              Far has 1, so you automatically allocate all 4 points and don't need to spend anything.
            </p>
            <p>
              Then, you have a <strong>medium Effort Challenge</strong> to move quickly across the city avoiding the
              patrols. You choose Flight and Near to move quickly. Flight has 4 current points and near has 2, you
              decide to spend 2 points from each to allocate 4 total points. This reduces Flight to 2 and Near to 0.
            </p>
            <p>
              Unfortunately you were detected, you now have a <strong>high Effort Challenge</strong> to sprint between
              hiding places to lose your pursuers. You choose Flight and Self to go all out. Flight still has 2
              remaining current points, and Self has 3. Before you can allocate you need to take a point of Stress to
              one of them, you choose Self. You then decide to allocate all of the remaining points, reducing both
              Metabolisms to 0.
            </p>
          </Section>
        </Section>
        <Section header="Resolving Challenges">
          <p>
            After allocating your Metabolism points to make an effort, now you must determine how well you do by
            measuring Progress.
          </p>
          <Section header="Creating Progress">
            <p>
              How well you do at Challenge is measured by Progress, and the Risk level determines how you create it.
              Progress created is applied to Goals. To cleanly succeed at a Goal, you must create an amount of Progress
              equal to or greater than the Goal. If there are multiple Goals, Progress is split up as you see fit and
              applied to them separately. For example if you've created 5 Progress in a Challenge with a Goal of 2 and a
              Goal of 4, you could apply 2 Progress to the smaller one and succeed at it leaving 3 left for the other,
              or you could apply 4 to the larger Goal to succeed at it leaving only 1 for the smaller Goal, but you have
              no way to succeed at both.
            </p>
          </Section>
          <Section header="Risk">
            <p>
              The Risk level determines how many of the applied points become Progress. Often this requires you to roll
              dice to determine.
            </p>
            <Section header="Low Risk">
              <p>
                You are in control of the Challenge and can accurately predict how it will proceed. Do not roll dice.
                Every Metabolism point used automatically becomes a point of Progress.
              </p>
            </Section>
            <Section header="Medium Risk">
              <p>
                The most common level. There are some elements outside of your control, like motion, aim, luck, or
                competition. Each point of Metabolism used on the Challenge grants you one die to roll. Each die has a
                roughly ~50% chance or generating Progress.
              </p>
            </Section>
            <Section header="High Risk">
              <p>
                The odds are stacked against you. Roll dice the same as with default risk, however, do not reroll any 6s
                that you roll.
              </p>
            </Section>
          </Section>
          <Section header="Rolling Dice">
            <p>
              Dice are only needed when the Risk level is medium or high. Roll one die for every Metabolism point used
              on the Challenge. Every die that has a result of 4 or greater increases the Progress by one and any die
              with a lower result does nothing. Any die that comes up 6 "explodes" and gets rerolled, potentially
              increasing Progress further or even coming up 6 again and getting rerolled again.
            </p>
          </Section>
          <Section header="Resolving Challenges Examples" isInset>
            <p>
              In a <strong>low Risk Challenge</strong> with a Goal of 4 to move a heavy solar array into place you can
              simply allocate 4 Metabolism points and know you will succeed because there are no dice to roll, only
              exertion is needed.
            </p>
            <p>
              You've allocated 5 Metabolism points to a <strong>medium Risk Challenge</strong> with a Goal of 3 to find
              records of sightings of a strange creature in an old microfiche archive. You roll 5 dice and get 1, 3, 4,
              4, and 6. The 4, 4, and 6 each create a point of Progress and you can reroll this 6, getting a 5 on the
              reroll and therefore adding another point of Progress. That's 4 total Progress, exceeding the Goal and
              allowing you to succeed and find everything you need.
            </p>
            <p>
              You've allocated 7 Metabolism points to a <strong>medium Risk Challenge with two goals,</strong> one Goal
              of 4 gather evidence of corruption needed to blackmail a Schedule auditor and another Goal of 2 to keep
              this attempt undetected. You roll 7 dice and get 1, 1, 2, 4, 5, 5, and 5. The 4's and 5's create 4 total
              points of Progress. You have enough Progress to succeed at either Goal, but not enough for both, you need
              to decide which is more important.
            </p>
            <p>
              You've allocated 6 Metabolism points a <strong>high Risk Challenge</strong> with a Goal of 4 to climb up
              hill during a violent mudslide. You roll 1, 3, 3, 5, 6, and 6 on the dice, but the 6's are not rerolled
              due to the high Risk level. The 5, 6, and 6 create Progress, but 3 total points is less than the goal so
              you are unable to climb further.
            </p>
          </Section>
        </Section>
      </Section>

      <Section header="Stress & Recovery">
        <p>
          Wear and tear accumulated from exertion and conflict is referred to as Stress. Stress can be caused by high
          Effort Challenges, the consequences of failing Goals, enduring a hardship, or by getting attacked in combat.
          When you taking Stress, the player chooses how to distribute the Stress between all affected Metabolisms.
          Typically, the pair of Metabolisms used in the current Challenge are the ones affected, but if the Stress is
          caused by something external you are enduring, the GM will state what Metabolism is affected.
        </p>
        <p>
          Stress you take isn't tracked directly, instead, each point of Stress a Metabolism takes immediately reduces
          its capacity by 1. If the current value is at the capacity , reduce it as well. If something, such as rest or
          medical care, causes you to remove a point of Stress from a Metabolism, restore its capacity by 1 point closer
          to the Metabolism's full score.
        </p>
        <p>
          For example, in a high Effort Challenge where you paired Fight and Self, the Effort level alone causes a point
          of Stress to either Fight or Self. You could choose Self to take the Stress, lowering its capacity by 1. If
          failing this Challenge resulted in consequences that caused 3 additional points of Stress, you would have to
          distribute it between the Fight or Self. You could choose to take 2 to Fight and 1 to Self, lowering their
          capacities further.
        </p>
        <Section header="Pushing Yourself">
          <p>
            When a Metabolism running empty, you may find it difficult to act, but by exerting extra effort and
            willpower you can overcome this limitation.
          </p>
          <p>
            At any time, you can Push Yourself by taking a point of unavoidable Stress on a chosen Metabolism. After
            reducing its Capacity due to the Stress, refill the Current value to the new Capacity. You can then carry on
            with a refilled Metabolism ready to go. You cannot Push a Metabolism if doing so would reduce its Capacity
            to 0.
          </p>
          <Section header="Pushing During Challenges">
            <p>
              You can Push at any moment, even during a challenge. When you do this, it happens while you are allocating
              Metabolism points, before rolling any dice it counting Progress. This allows you to allocate all of a
              Metabolism, then Push to refill it and allocate the new refilled points as well. By Pushing during a
              Challenge you can potentially accomplish harder Goals than you normally could.
            </p>
          </Section>
          <Section header="Push Examples">
            <p>
              If your current Fight has been reduced to 1 from a capacity of 5 and you anticipate needing to act
              aggressively soon, you could Push Fight. This causes Stress, reducing the capacity to 4 and then refills
              the current value to match it, leaving you with 4 current Fight to work with.
            </p>
            <p>
              Later, during a Challenge in which you allocated all 4 of these points and yet still feel it won't be
              enough to meet an important Goal, you could decide to Push Fight again at this moment. The Stress reduces
              the capacity to 3 and the current value is then refilled to 3. You can then continue allocating by adding
              2 of these 3 points to the Challenge. This combined with the initial 4 points leaves you with 6 points of
              Fight allocated.
            </p>
          </Section>
        </Section>
      </Section>

      <Section header="Tracking Time">
        <p>
          The primary way to restore spent Metabolisms is time. Time in the game terms is primarily measured in rounds,
          scenes, and days. Other units like seconds or hours occur only inside the narrative and don't directly impact
          game mechanics.
        </p>
        <Section header="Rounds">
          <p>
            Rounds are only used in combat and other rapid paced high tension situations where every second counts. Each
            round is a brief moment, just a few seconds, in which everyone involved can take one turn acting. There is
            no direct relationship between rounds and seconds, a round takes as long as it needs to. Anything described
            as taking a minute or longer can be assumed to last the entire duration of the combat or whatever other
            situation is being measured in rounds. For full details on rounds and turns, consult the chapter on combat.
          </p>
        </Section>
        <Section header="Scenes">
          <p>
            Think of them like scenes in a movie, any time the story's spotlight skips over a period of time or changes
            locations without the spotlight following the characters to the new location, the scene has changed. Scenes
            take as long as they need to in order to match the pace the narrative, but are typically a few minutes to at
            most a few hours. Between scenes, characters typically have a chance to catch their breath.{" "}
          </p>
        </Section>
        <Section header="Days">
          <p>
            Days mostly match the in-narrative 24 hour days. However, they take place from the character's point of
            view, only ending when they go to sleep. During times when this cycle is complicated or disrupted by
            emergency situations, the day only ends when the characters sleep. This can only occur at most once in a 24
            hour period. Characters with Specializations that allow them to live without sleep still must have several
            hours of downtime to end a day.
          </p>
        </Section>
        <Section header="Metabolism Recovery">
          <p>
            Any time the scene changes, refill all your current Metabolisms to their capacity. This refill is prevented
            if the transition between scenes is stressful, under urgent time pressure, or spent exerting yourself. For
            example, walking to the next location allows a refill, but if you have to sprint there you can't refill.
          </p>
        </Section>
        <Section header="Stress Recovery">
          <p>
            Metabolism capacity, once reduced by Stress, recovers with rest. At the start of each day, you can recover
            from Stress. Hidden Metabolisms recover quickly, all Stress is removed, fully restoring each capacity.
            However the physical body needs time to heal itself, each Physical Metabolisms has only 1 point of Stress
            removed from it. After restoring each Metabolisms capacity, refill the current value as well.
          </p>
          <p>
            When deciding where to apply Stress that was dealt to you, you may wish to apply the majority of it to
            Hidden Metabolisms because they recover more quickly.{" "}
          </p>
          <p>
            If you start the day after insufficient downtime to sleep or rest properly, typically several hours are
            necessary, the GM may reduce the amount of Stress recovery that occurs by half.
          </p>
        </Section>
        <Section header="Countdowns">
          <p>
            Countdowns are used to track when long term events or projects complete. A countdown is simply a number
            representing an abstract duration, when the final number in the countdown is reached, the event occurs or
            the project completes. You can represent it with tally marks, a simple number, or by drawing segments of a
            clock to fill in. The countdown progresses to the next number when either when a certain time increment
            passes or when requirements the GM describes are met.
          </p>
          <p>
            The GM can use countdowns to determine when an expected event occurs. For example, the next guard rotation
            will pass by the characters in 10 minutes, the storm surge will breach the levee in 6 hours, or your hacker
            will be ejected from the system after making 4 mistakes. The players must plan their actions accordingly.
          </p>
          <Section header="Long Term Projects">
            <p>
              Countdowns can also be used to track progress towards larger projects the characters pursue. This breaks
              the larger project into several Challenges devoted to a single Goal with a difficulty equal to the
              countdown's duration. All Progress gained on Challenges done in pursuit of completing the project is
              applied to the countdown clock, accumulating over multiple Challenges. Eventually, when total Progress
              meets the countdown, the project is completed successfully.{" "}
            </p>
            <p>
              For example, cracking the case on a complex mystery, building a solar powered community radio tower,
              crafting new identities, or reverse engineering a mysterious artifact could all be long term projects with
              countdown Goals of 30, only reachable by combining multiple Challenges.
            </p>
          </Section>
        </Section>
      </Section>

      <Section header="Injury & States">
        <p>
          When taking Stress, avoid reducing a Metabolism's capacity to 0, because when this occurs there are
          consequences.
        </p>
        <p>
          When this happens to a Physical Metabolism, you gain an injury State that prevents you from taking certain
          actions. When this happens to a Hidden Metabolism, you gain a dissociative State that disorients you and makes
          acting normally difficult.
        </p>
        <p>
          States are lasting status conditions that modify or limit how you can act. In addition to the injured and
          dissociated States, there are several other States that can be imposed on you.
        </p>
        <Section header="Injury States">
          <p>
            These states can only be caused by taking significant physical Stress. When Stress reduces a Physical
            Metabolism capacity to 0, it becomes injured and you gain the corresponding injury State. You cannot include
            an injury in a Metabolism pairing. If an injured Metabolism has its capacity restored above 0 this state is
            removed, but it cannot be removed by any other means.
          </p>
          <p>
            Metabolism capacity cannot be reduced below 0. If more Stress was dealt to a Metabolism than it can take,
            the attacker that caused the Stress, or the GM if there is no attacker, decides which Physical Metabolism
            takes the Stress instead.
          </p>
          <p>
            If you ever have two injury States at the same time, you also gain the Dying State. If you ever have all
            three injury States at the same time, you die.
          </p>
          <Section header="Injured Fight">
            <p>Your injuries prevent you from using attack actions.</p>
          </Section>
          <Section header="Injured Flight">
            <p>
              Your injuries prevent you from using reactions. Instead, when you are attacked, the attacker chooses a
              Physical Metabolism to deal all Stress to.
            </p>
          </Section>
          <Section header="Injured Focus">
            <p>Your injuries prevent you from using inhale actions or cascade events.</p>
          </Section>
          <Section header="Dying">
            <p>
              You are unconscious and cannot take actions. You can only remove this state by getting medical care or
              supernatural healing. If you have this state for more than an hour, you die.
            </p>
          </Section>
        </Section>
        <Section header="Dissociative States">
          <p>
            When your hidden body is been stressed beyond your limits, it causes the physical brain to come out of sync
            with the hidden resources it normally has, leading to psychedelic effects called dissociation. This is
            represented by States that are only caused by Stress to Hidden Metabolisms. When one's capacity is reduced
            to 0, it becomes dissociated and you gain the dissociative State that corresponding to the dissociated
            Metabolism. If it has its capacity restored back above 0 this State is removed, but it cannot be removed by
            any other means. If further Stress is dealt to a dissociated Metabolism, the GM or the attacker that caused
            the Stress decides which Hidden Metabolism takes the Stress instead.{" "}
          </p>
          <p>
            If all three Hidden Metabolisms become dissociated, the dissociation escalates and becomes permanent,
            rendering your character no longer playable. Their exact fate is up to the GM, but it may be worse than
            death.
          </p>
          <Section header="Dissociated Self" topicKey="dissociatedSelfState">
            <p>
              You are depersonalized. Your body feels wrong, unreal, awkward, untrustworthy, like an awkward exoskeleton
              that requires all your attention to pilot.
            </p>
            <p>All challenges you take are always High Effort and cannot have the Effort level lowered.</p>
          </Section>
          <Section header="Dissociated Near" topicKey="dissociatedNearState">
            <p>
              You are derealized, disoriented, and no longer sure if anything around you is real or imagined.
              Interacting with the world is complex and unpredictable.
            </p>
            <p>All challenges you take are always High Risk and cannot have the Risk level lowered.</p>
          </Section>
          <Section header="Dissociated Far" topicKey="dissociatedFarState">
            <p>
              The safest action seems like getting far away, this is your most important and urgent goal. You cannot
              trust anyone that says otherwise.
            </p>
          </Section>
        </Section>
        <Section header="Other States">
          <p>
            These states can be caused by mundane circumstances or by cascade events. These States come with an
            Intensity value indicating how hard it is to get rid of and strong it is. Anything that causes a state to a
            target that already has it increases the intensity by the state.
          </p>
          <Section header="Afraid">
            <p>Something nearby is terrifying you.</p>
            <p>While you have this state, you cannot willingly move closer to the source of your fear.</p>
          </Section>
          <Section header="Calmed">
            <p>You're convinced there is currently no need for violence.</p>
            <p>
              While you have this state, you cannot take any attack actions or any other action that would intentionally
              escalate tensions. If hostile or threatening action is taken against you or a close ally, you immediately
              lose this state.
            </p>
          </Section>
          <Section header="Enthralled">
            <p>Your attention is being manipulated by something.</p>
            <p>
              You have disadvantage on Willpower and Intuition Reactions caused by the source of this State. Conversely,
              you also have disadvantage on Perception Reactions caused by anyone other than the source of this State.
            </p>
          </Section>
          <Section header="Faded">
            <p>
              You have become hard to notice. Not invisible, but people assume you belong wherever you are and are not
              worthy of notice.
            </p>
            <p>
              Others must make a Perception Reaction with a difficulty of your faded intensity to notice you. You have
              disadvantage on any Challenges related to social interactions. If you take any actions that are violent or
              extremely unusual, this state immediately ends.
            </p>
          </Section>
          <Section header="Grappled">
            <p>
              You are being held by someone else. This can range from a single hand grabbing your sleeve to being fully
              pinned in place.
            </p>
            <p>
              While grappled, you can only move within the spaces adjacent to the grappler. The grappler can force you
              to move with them when they use the move action, but doing so increases the terrain difficulty of each
              space they cross by 1.
            </p>
            <p>
              The grappler can freely release you at any moment, otherwise the grapple only ends if you and the grappler
              become more than a meter apart or you successfully escape. You can attempt to escape as an action by
              making either an Unarmed Attack or Unarmed Defense Challenge. Any Progress gained reduces the Intensity of
              grappled, allowing you to escape when it reaches 0. The Rest action can reduce the intensity of this state
              like any other state, but only to intensity 1, but only an escape attempt can reduce it to 0 end end the
              grapple.
            </p>
          </Section>
          <Section header="Out of Body">
            <p>
              Your physical body is unconscious, but your hidden body is still aware and can still move freely in hidden
              space.
            </p>
            <p>
              You cannot interact with or be sensed by anything in physical space, however the physical world casts
              shadows into the hidden world that impede your movement. You are aware of the shape and position of
              physical objects within a meter of you, but have no other senses. Any actions you take in hidden space may
              only have Hidden Metabolisms applied to them.
            </p>
          </Section>
          <Section header="Suppressed">
            <p>You are pinned down behind cover and have disadvantage on all attacks.</p>
            <p>
              You can remove this condition by moving, however the difficulty of all adjacent spaces is increased by the
              intensity of this state for you.
            </p>
          </Section>
          <Section header="Taunted">
            <p>Someone else has become your high priority target and occupies your attention.</p>
            <p>You have disadvantage if you try to attack anyone other than the source of this taunt.</p>
          </Section>
          <Section header="Unconscious">
            <p>You are no longer able to act, react, communicate, or sense your surroundings.</p>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default ChapterGameplay;
