import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Break from "../components/break/break";
import ChapterIntro from "../components/chapter-intro/chapter-intro";
import Section from "../components/section/section";
import Logomark from "../svgs/logomark";
import Pair from "../components/metabolism/pair";
import Crosslink from "../components/crosslink/crosslink";
import Metabolism from "../components/metabolism/metabolism";

function ChapterGameplay() {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;

  return (
    <Section coordinates={"3"} header="Gameplay">
      <ChapterIntro>
        <p>
          When your character is challenged, you need to decide how to attempt to overcome this challenge and then
          determine the results of this attempt. The most important step is to choose a pairing of Metabolisms, one
          physical and one hidden, to apply to the challenge.
        </p>
        <Logomark />
      </ChapterIntro>

      <Section header="Physical Metabolisms" isChapterIntroColumn>
        <p>Physical Metabolism choice is about deciding what the body and mind are doing to respond to a Challenge.</p>
        <Section header="Using Fight" metabolized="Fight">
          <p>Fight is your ability to change the external world.</p>
          <p>
            Use Fight any time you are trying to affect, move, harm, or influence something. This includes all attacks
            in combat, athletic activities that involve power or anaerobic bursts like lifting, throwing, or jumping,
            social activities like intimidation, persuasion, or deception, and mental tasks that involve using "brute
            force" solutions.
          </p>
        </Section>
        <Section header="Using Flight" metabolized="Flight">
          <p>Flight is your ability avoid unwanted changes or to achieve and maintain a position.</p>
          <p>
            Use Flight any time you are trying to avoid harm, endure hardship, or traverse your environment. This
            typically includes all defenses in combat, sustained aerobic athletic activities like climbing or distance
            running, social activities like resisting influence or maintaining composure, and mental activities like
            identifying tricks or paths that lead to bad outcomes.
          </p>
        </Section>
        <Section header="Using Focus" metabolized="Focus">
          <p>Focus is your ability to direct and maintain attention or sense and interpret situations.</p>
          <p>
            Use Focus any time you want to notice a detail, think your way out of a problem, or be in the right place at
            the right time. This includes initiative in combat, trying to succeed in athletic activities through
            strategy instead of athleticism, social skills like being witty or thoughtful, and mental skills that
            involve knowledge, memory, attention, or complexity.
          </p>
        </Section>
      </Section>
      <Break />
      <Section header="Hidden Metabolisms" isChapterIntroColumn isClassified>
        <p>Hidden Metabolism choice is primarily concerned with where your response to the challenge takes place.</p>
        <Section header="Using Self" metabolized="Self">
          <p>Self is the hidden body's ability to aid the physical body.</p>
          <p>
            Use Self any time you are trying to push your body beyond its normal limits. This includes unarmed combat, a
            wide range of athletic activities involving power, endurance, or adrenaline, as well as social activities or
            mental activities that require willpower, patience, or managing your emotions.
          </p>
        </Section>
        <Section header="Using Near" metabolized="Near">
          <p>
            Near is the hidden body's ability to sense and act in your immediate surroundings and understand
            connections.
          </p>
          <p>
            Use Near any time you are trying to interact with your surroundings with finesse, speed, and precision. This
            typically includes armed melee content, athletic activities that involve skillful movements or avoiding
            obstacles, social activities involving body language, and mental activities that involve searching for
            connections between concepts.
          </p>
        </Section>
        <Section header="Using Far" metabolized="Far">
          <p>
            Far is the hidden body's ability to sense and act over distances, understand other minds, or make
            predictions.
          </p>
          <p>
            Use Far any time you are trying to empathize with others as well as understand or interact with things
            outside of your reach. This includes ranged combat, athletic activities that involve situational awareness,
            good aim, or predicting opponents, a wide range of social activities that involve understanding what others
            may be thinking, and mental activities that involve an eye for details or making plans for the future.
          </p>
        </Section>
      </Section>

      <Break page />

      <Section header="Challenges">
        <p>
          Typically you can just describe what your character does in any situation. However, if an action or event
          involves exertion, risk, or the possiblity of failure, it needs to be resolved as a Challenge.
        </p>
        <Section header="Steps by Step Challenges" isInset>
          <ol>
            <li>
              The GM describes the context with a the{" "}
              <Crosslink target={linkMap.DifficultyandContext}>Difficulty</Crosslink>
              level and optionally the level of Risk and Effort.
            </li>
            <li>
              Determine which pair of <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink> to use.
            </li>
            <li>
              Determine if you have advantage, possibly from a relevant Trait, or disadvantage, and adjust the Risk or
              Effort level accordingly.
            </li>
            <li>
              Spend any <Crosslink target={linkMap.Gameplay}>Metabolism</Crosslink> points you need to.
            </li>
            <li>
              Count how much <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink> was produced.
            </li>
            <li>
              Compare the <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink> to the
              <Crosslink target={linkMap.DifficultyandContext}>Difficulty</Crosslink>
              to determine the results.
            </li>
          </ol>
        </Section>
        <Section header="Difficulty and Context">
          <p>
            The context of a Challenge is set and described by the GM and includes any relevant details about the nature
            of the Challenge and how it might be resolved. The only required element of context is a Difficulty level.
            Difficulty is the target number the player must match or beat to succeed at the Challenge.
          </p>
          <Section header="Difficulty Levels" isInset>
            <p>0 - 3 Anyone can reliably do this if there are no complications.</p>
            <p>3 - 6 Experts can reliably do this, others need extra effort and luck.</p>
            <p>6 - 12 Even experts need extra effort and luck to do this, it's practically impossible for others.</p>
            <p>12 - 18 Superhuman ability is required, but still appears plausibly normal to witnesses.</p>
            <p>
              18 - 36 Even with superhuman ability, extra effort and luck are needed. The attempt appears overtly
              supernatural to witnesses.
            </p>
          </Section>
          <p>
            Optionally, the Challenge context may also include Risk and Effort levels that modify how it is resolved.
            The Risk level will determine if you need to roll <Crosslink target={linkMap.RollingDice}>dice</Crosslink>{" "}
            and the Effort level will determine how many
            <Crosslink target={linkMap.Gameplay}>Metabolism</Crosslink> points you need to spend. The value for either
            can be Low, Default, or High. If either Risk or Effort is not mentioned, the level is assumed to be Default.
          </p>
          <p>
            In addition to the Difficulty, Risk, and Effort levels, the GM might describe any additional context related
            to the
            <Crosslink target={linkMap.Challenges}>Challenge</Crosslink> by answering any of the following questions
            that are relevant:
          </p>
          <p>
            Are any <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink> ill suited to the Challenge? If so, the
            Difficulty may be increased if these are used.
          </p>
          <p>
            Is there any urgency to the <Crosslink target={linkMap.Challenges}>Challenge</Crosslink> or consequences if
            you take too much time with it?
          </p>
          <p>Are there any circumstances that give the characters an advantage or disadvantage?</p>
          <p>What are the consequences for failure?</p>
          <p>
            When communicating this context to the players, it is filtered through what the character would be aware of.
            Typically, a player can know the exact Difficulty number. However, depending on the situation and what the
            character can perceive, you may only get hints.
          </p>
          <Section header="Risk Levels" isInset>
            <h5>Low Risk</h5>
            <p>
              You can control your approach to this Challenge. No dice are required and each point of Metabolism applied
              to the Challenge produces one point of
              <Crosslink target={linkMap.Gameplay}>Progress</Crosslink>.
            </p>
            <h5>Default Risk</h5>
            <p>
              A perfect attempt could still fail due to chaos, competition, luck, motion, or other unpredictable
              factors. Each point of Metabolism applied to the Challenge grants you one die to roll with a ~50% chance
              of creating
              <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink>.
            </p>
            <h5>High Risk</h5>
            <p>
              The odds are stacked against you. Roll dice the same as with default risk, however, if you end up tying
              the Difficulty you don't succeed cleanly. Instead, you must choose if you fail entirely, or succeed at a
              cost. The GM will describe the cost before you decide, but this cost always causes 1 point of unavoidable
              Stress. If this Challenge does not have a set Difficulty, for example if it is an attack or a reaction, it
              instead just causes 1 point of unavoidable Stress.
            </p>
          </Section>
          <Section header="Effort Levels" isInset>
            <h5>Low Effort</h5>
            <p>
              This challenge is effortless or allows you to set your own pace. All current Metabolism points in your
              chosen Pairing are applied to the Challenge and are not spent. Challenges that are primarily about
              noticing or knowing something are typically Low Effort.
            </p>
            <h5>Default Effort</h5>
            <p>
              Some physical or mental effort is required. Choose any combination of points from your chosen
              <Crosslink target={linkMap.MetabolismPairing}>paired Metabolisms</Crosslink> to spend. Each point spent
              creates one point of
              <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink>.
            </p>
            <h5>High Effort</h5>
            <p>
              The mind or body are strained by this task. This works the same as Default Effort, however attempting it
              will also cause a point of unavoidable
              <Crosslink target={linkMap.Stress}>Stress</Crosslink>.
            </p>
          </Section>
        </Section>
        <Section header="Metabolism Pairing">
          <p>
            After the GM describes the context, the next step is determining which two Metabolisms the player will use
            to complete the Challenge. The Metabolisms used will always be a pairing of one
            <Crosslink target={linkMap.PhysicalMetabolisms}>physical</Crosslink> and one
            <Crosslink target={linkMap.HiddenMetabolisms}>hidden Metabolism</Crosslink>. The GM may require a specific
            choice for one or both of them, but otherwise the player chooses which to use.
          </p>
          <p>
            Most <Crosslink target={linkMap.Challenges}>Challenges</Crosslink> can potentially be accomplished with many
            different Metabolism pairings, you just have to describe how your character is handling the situation in a
            way that applies them. The
            <Crosslink target={linkMap.TheGameMaster}>GM</Crosslink> has the final say over whether a description is
            sufficient to justify the chosen Metabolisms, if it doesn't you get Disadvantage on the Challenge.
          </p>
          <p>
            Sometimes, often in combat, a <Crosslink target={linkMap.Challenges}>Challenge</Crosslink> will require a
            specific choice for one or both Metabolisms. For example, to throw a punch, you must use <Pair fight self />
            , and to dodge a bullet you must use <Pair flight far />.
          </p>
          <Section header="Metabolism Pairing Example" isInset>
            <p>
              Your character is trying to sneak into a secure building, so you need to choose what Metabolism pairing
              you will use to attempt this
              <Crosslink target={linkMap.Challenges}>Challenge</Crosslink>.
            </p>
            <p>
              One pairing you could choose is <Metabolism flight />, to represent how you are moving quickly to avoid
              your pursuers, and
              <Metabolism far /> to represent that you are trying to maintain awareness of the guard's movements to
              avoid getting too close.
            </p>
            <p>
              Alternatively, you could choose <Metabolism focus />, to represent watching closely for any security
              cameras, paired with
              <Metabolism near />, to represent how you are carefully interacting with your environment to remain
              silent.
            </p>
          </Section>
        </Section>
        <Section header="Counting Progress">
          <p>
            To cleanly succeed at a <Crosslink target={linkMap.Challenges}>Challenge</Crosslink>, the player must create
            an amount of Progress greater than the{" "}
            <Crosslink target={linkMap.DifficultyandContext}>Difficulty</Crosslink>. The Effort level determines how
            many of your Metabolism points you can apply, if it is Low all of the current points in your metabolism pair
            are applied, if it is higher only the points you choose to spend are applied. The Risk level determines how
            many of the applied points become Progress, if it is Low they all do, if it is higher you must roll a die
            for each point to see if it becomes Progress.
          </p>
          <p>
            If your total Progress is lower than the Difficulty, you fail and do not complete the goal of the Challenge.
            If your Progress ties or exceeds the Difficulty, you succeed.
          </p>
        </Section>
        <Section header="Rolling Dice">
          <p>
            Dice are only needed if a <Crosslink target={linkMap.Challenges}>Challenge</Crosslink> has a Risk level
            other than Low. To resolve the roll, roll one die for every Metabolism point applied to the Challenge. Every
            die that has a result of 4 or greater increases the
            <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink> by one and any die with a lower result
            does nothing. Any die that comes up 6 "explodes" and gets rerolled, potentially increasing
            <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink>
            further or even coming up 6 again and getting rerolled again.
          </p>
          <Section header="Rolling Dice Example" isInset>
            <ol>
              <li>
                The current values of your chosen Metabolism pairing add up to 4. The Effort level is low, so all 4
                points are applied. However, the Challenge is also Default Risk, so this produces 4 dice instead of
                Progress.
              </li>
              <li>You roll the 4 dice, getting the results 2, 4, 6, and 6.</li>
              <li>
                Three of those are 4 or better, so that's 3 points of
                <Crosslink target={linkMap.Challenges}>Progress</Crosslink> already.
              </li>
              <li>
                The 6's explode, so you reroll both of them, getting a 1 and a 5. That's one more die that is above 4,
                so your
                <Crosslink target={linkMap.Challenges}>Progress</Crosslink> increases to 4.
              </li>
              <li>If the difficulty was 4 or less, you succeed.</li>
            </ol>
          </Section>
        </Section>
        <Section header="Spending Metabolisms">
          <p>
            Your Metabolisms are a resource with a current and a maximum value. The maximum value is typically equal to
            the Metabolism's score, but it can be reduced by <Crosslink target={linkMap.Stress}>Stress</Crosslink>. When
            you take a low Effort Challenge these current values are applied and then remain unchanged. Otherwise, you
            must spend Metabolism points to buy Progress or dice. To spend points, reduce the current values of the
            Metabolisms in your chosen pairing by any amount. The total number of points you spent is applied to the
            Challenge, buying you the same number of dice or Progress.
          </p>
          <p>
            These reduced values represent short term fatigue, your character doesn't feel like using them when they're
            depleted. You can refill them this by using the Push action to fight through the fatigue, taking the Rest
            action to recover, or from the adrenaline of participating in combat.
          </p>
          <Section header="Spending Metabolisms Example" isInset>
            <ol>
              <li>
                You choose the pairing of <Pair fight self /> for a default Effort
                <Crosslink target={linkMap.Challenges}>Challenge</Crosslink>. You currently have 3 out of 4 points of
                <Metabolism fight /> and 1 out of 1 points of <Metabolism self /> available.
              </li>
              <li>
                You decide to spend 2 points of <Metabolism fight /> and 1 point of <Metabolism self />, leaving you
                with only 1 point of <Metabolism fight /> remaining.
              </li>
              <li>You spent a total of 3 Metabolism points, so you created 3 Progress (or 3 dice).</li>
            </ol>
          </Section>
        </Section>
        <Section header="Advantage & Disadvantage">
          <p>
            The <Crosslink target={linkMap.TheGameMaster}>GM</Crosslink> sets the initial Risk and Effort levels, but
            sometimes you can change it. If you have Advantage on a Challenge, you can chose to improve either the Risk
            or Effort level. Similarly, if you have Disadvantage the GM will choose a level to degrade further. If you
            inflict Disadvantage on an enemy, you choose which level, Risk or Effort, is degraded. A Challenge may only
            have a one instance of Advantage or Disadvantage, you can't apply either more than one time. You also cannot
            have both Advantage and Disadvantage at the same time, if you manage to get both they cancel each other out.
          </p>
          <h4>Using Traits</h4>
          <p>
            If you find a way to improve your odds in the Challenge, the GM may give you Advantage. One reliable way to
            do this is by applying a Trait. If you have one or more Traits that are relevant to the
            <Crosslink target={linkMap.Challenges}>Challenge</Crosslink>, you gain Advantage or remove Disadvantage.
            Traits are relevant if they can somehow be leveraged to assist with the
            <Crosslink target={linkMap.Challenges}>Challenge</Crosslink>. For example, a Trait called Medical Training
            would be relevant in a<Crosslink target={linkMap.Challenges}>Challenge</Crosslink> about treating injuries.
            Players and GMS are encouraged to be creative and flexible when deciding if Traits are relevant.
          </p>
        </Section>
      </Section>

      <Section header="Stress">
        <p>
          Wear and tear accumulated from exertion and conflict is referred to as Stress. Stress can be caused by the
          consequences of
          <Crosslink target={linkMap.Challenges}>Challenges</Crosslink>, enduring a hardship, or by getting attacked in
          combat, or by High Risk and Effort levels. When you take Stress, choose how to distribute the Stress between
          all affected
          <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink>. Typically, the
          <Crosslink target={linkMap.MetabolismPairing}>pair of Metabolisms</Crosslink> involved in the current
          <Crosslink target={linkMap.Challenges}>Challenge</Crosslink> are the ones affected.
        </p>
        <p>
          For each point of Stress a <Crosslink target={linkMap.Gameplay}>Metabolism</Crosslink> takes, reduce its
          maximum value by 1. If something, such as rest or healing, causes you to remove a point of Stress from a
          <Crosslink target={linkMap.Gameplay}>Metabolism</Crosslink>, restore its maximum to 1 point closer to the
          Metabolism's full score.
        </p>
        <Section header="Depleted Metabolisms">
          <p>
            To stay effective, you'll want to keep your current Metabolism values high. However, inevitably they will be
            reduced to 0 and things aren't over when this happens. You can refill them by taking the Rest action, but
            often there isn't enough time to rest. If you find yourself with Metabolisms that are too low to succeed in
            a Challenge, you can use the Push action to refill them and potentially still succeed. Even when your
            Metabolism pairing is completely empty, you can still make a desperate attempt by treating the
            <Crosslink target={linkMap.Challenges}>Challenge</Crosslink> as if you spent a single point on it, but when
            you do so the Risk level increases.
          </p>
          <p>
            If Stress reduces the maximum values, this creates a bigger problems. Not only do you have fewer points to
            work with, but it takes much more rest to recover. If a Metabolism's maximum is reduced to 0, you can become
            injured or dissociated.
          </p>
        </Section>
        <Section header="Rest & Recovery">
          <p>
            The primary way to restore <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink> is by using the Rest
            action. This action allows you to refill all of your current Metabolism values to their current maximum if
            you spend an hour doing it.
          </p>
          <p>
            Once per day you can spend several hours on the Rest action. When you do remove all
            <Crosslink target={linkMap.Challenges}>Stress</Crosslink>
            from all <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolisms</Crosslink> and remove 1 + your
            Rest Action Bonus
            <Crosslink target={linkMap.Stress}>Stress</Crosslink> from all
            <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolism</Crosslink>. Then refill the current
            value of all
            <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink> to their new maximums.
          </p>
          <Section header="Stress and Recovery Example" isInset>
            <ol>
              <li>
                You spend all of your current <Pair flight self /> on a dangerous climbing Challenge, reducing
                <Metabolism flight /> to 0 out of 5 and <Metabolism self /> to 0 out of 2.
              </li>
              <li>
                Unfortunately, the dice roll poorly and you fail anyway. The resulting fall hurts you causing 4 Stress.
              </li>
              <li>
                You must split this Stress between teh involved Metabolisms, <Pair flight self />. You choose put 3
                <Crosslink target={linkMap.Challenges}>Stress</Crosslink> on <Metabolism flight /> and the remaining 1
                on
                <Metabolism self />. You now have 0 out of 2 <Metabolism flight /> and 0 out of 1 and
                <Metabolism self />.
              </li>
              <li>
                Later, you can rest for an hour to fully refill your current <Pair flight self /> values (along with all
                other Metabolisms) to to their maximum. However these maximums have been lowered by
                <Crosslink target={linkMap.Stress}>Stress</Crosslink>, so you now have 2 out of 2 <Metabolism flight />
                and 1 out of 1 and <Metabolism self />.
              </li>
              <li>
                That night you sleep normally, removing all
                <Crosslink target={linkMap.HiddenMetabolisms}>hidden metabolism</Crosslink>
                <Crosslink target={linkMap.Stress}>Stress</Crosslink> and 1 point of
                <Crosslink target={linkMap.Stress}>Stress</Crosslink> from all
                <Crosslink target={linkMap.PhysicalMetabolisms}>physical Metabolisms</Crosslink>. You now have 3 out of
                3
                <Metabolism flight /> and 2 out of 2 and <Metabolism self />.
              </li>
            </ol>
          </Section>
        </Section>
      </Section>

      <Section header="Injury & States">
        <p>
          When any Metabolism has its maximum value reduced to 0 by Stress, there are consequences. When this happens to
          a Physical Metabolism, you gain an injury State that prevents you from taking certain actions. When this
          happens to a Hidden Metabolism, you gain a dissocative State that disorients you and makes acting normally
          difficult.
        </p>
        <p>
          States are lasting status conditions that modify you can act. In addition to the Injured and Dissociated
          States, there are several other States that can be imposed on you.
        </p>
        <Section header="Injury States">
          <p>
            These states can only be caused by taking significant physical Stress. When Stress reduces a Physical
            Metabolism maximum to 0, you gain the injury State that corresponds to it. If an injured metabolism has its
            maximum restored to above 0 this state is removed, but it cannot be removed by any other means. If more
            Stress was dealt to you than needed to injure the Metabolism, of if Stress is dealt to an already Injured
            metabolism, the GM or the attacker that caused the Stress decides which Physical Metabolism takes the Stress
            instead.
          </p>
          <p>
            If you ever have two injury States, you also gain the Dying State. If you gain the injury States for all
            three physical metabolisms, you die.
          </p>
          <Section header="Injured Fight">
            <p>Your injuries prevent you from using attack actions.</p>
          </Section>
          <Section header="Injured Flight">
            <p>
              Your injuries prevent you from using reactions. If you are attacked, the attacker chooses which metabolism
              pair is dealt Stress.
            </p>
          </Section>
          <Section header="Injured Focus">
            <p>Your injuries prevent you from using basic actions or cascade events.</p>
          </Section>
          <Section header="Dying">
            <p>Your injuries are so severe that you are unconscious and can no longer benefit from the Heal action.</p>
            <p>
              You can only remove this state by getting medical attention. If you have this state for more than an hour
              you die.
            </p>
          </Section>
        </Section>
        <Section header="Dissociative States">
          <p>
            When your hidden body is been stressed beyond your limits, it causes the physical brain to come out of sync
            with resources it normally has, leading to debilitating psychedelic effects called dissociation. This is
            represented by States that are only caused by Stress to Hidden Metabolisms. When one's maximum is reduced to
            0, it becomes dissociated and you gain the dissociative State that corresponding to the dissociated
            Metabolism. If this metabolism has its maximum restored back above 0 this State is removed, but it cannot be
            removed by any other means. If further Stress is dealt to a dissociated Metabolism, the GM or the attacker
            that caused the Stress decides which Hidden Metabolism takes the Stress instead.
          </p>
          <p>
            If all three Hidden Metabolisms become dissociated, the dissociation escalates and becomes permanent,
            rendering your character no longer playable. Their exact fate is up to the GM, but it may be worse than
            death.
          </p>
          <Section header="Dissociated Self" topicKey="dissociatedSelfState">
            <p>
              You are depersonalized. Your body feels wrong, unreal, awkward, untrustworthy, like an awkward exoskeleton
              you're piloting.
            </p>
            <p>All challenges you take are always High Risk cannot have the Risk lowered.</p>
          </Section>
          <Section header="Dissociated Near" topicKey="dissociatedNearState">
            <p>You are derealized, disoriented, and no longer sure if anything around you is real or imagined.</p>
            <p>The only movement you can make is 1 meter at the end of your turn.</p>
          </Section>
          <Section header="Dissociated Far" topicKey="dissociatedFarState">
            <p>You are in a fugue state and don't remember who you are, what you're doing, or who you can trust.</p>
            <p>
              The safest action seems like getting far away. This is now your your most important and urgent goal. You
              cannot trust anyone that says otherwise.
            </p>
          </Section>
        </Section>
        <Section header="Other States">
          <p>
            These states can be caused by mundane means or by specific cascade events. These States come with an
            Intensity value indicating how hard it is to get rid of and strong it is. Anything that causes a state to a
            target that already has it increases the intensity by the state. The Rest action can be used to reduce the
            intensity of these states, removing the state once the intensity is 0.
          </p>
          <Section header="Afraid">
            <p>Something nearby is terrifying you.</p>
            <p> While you have this state, you cannot willingly move closer to the source of your fear.</p>
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
            <p>You are being held by someone else.</p>
            <p>
              While grappled, you can only move within the spaces adjacent to the grappler. The grappler can force you
              to move when they move, but doing so increases the difficulty of each space they cross by 1.
            </p>
            <p>
              The grappler can freely release you at any moment, otherwise the grapple only ends if you and the grappler
              become more than a meter apart or you successfully escape. You can attempt to escape as an action by
              making either an Unarmed Attack or Unarmed Defense challenge. Any Progress gained reduces the Intensity of
              grappled, allowing you to escape when it reaches 0.
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
              physical objects within a meter of you, but have no other senses. If you use the Move action to travel
              through hidden space, or take any other action in hidden space, only hidden metabolisms may be applied to
              it.
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
            <p>Someone else has become your high priority target.</p>
            <p>If there is a viable way to attack source of this state, then it is the only target you can attack.</p>
          </Section>
          <Section header="Unconscious">
            <p>You are no longer able to act, react, communicate, or sense your surroundings.</p>
          </Section>
        </Section>
      </Section>
      <Break page />
    </Section>
  );
}

export default ChapterGameplay;
