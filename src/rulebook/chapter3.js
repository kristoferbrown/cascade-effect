import Break from "../components/break/break";
import ChapterIntro from "../components/chapter-intro/chapter-intro";
import Section from "../components/section/section";
import Logomark from "../svgs/logomark";
import Pair from "../components/metabolism/pair";
import Crosslink from "../components/crosslink/crosslink";
import Metabolism from "../components/metabolism/metabolism";
import { topics } from "../context/rulebookContext";

function Chapter3() {
  return (
    <Section coordinates={"3"} header="Gameplay">
      <ChapterIntro>
        <p>
          When your character is challenged, you need to decide how to attempt to overcome this challenge and then determine the results of this
          attempt. The most important step is to choose a pairing of Metabolisms, one physical and one hidden, to apply to the challenge.
        </p>
        <Logomark />
      </ChapterIntro>

      <Section header="Physical Metabolisms" isChapterIntroColumn>
        <p>Physical Metabolism choice is about deciding what the body and mind are doing to respond to a Challenge.</p>
        <Section header="Using Fight" metabolized="Fight">
          <p>Fight is your ability to change the external world.</p>
          <p>
            Use Fight any time you are trying to affect, move, harm, or influence something. This includes all attacks in combat, athletic activities
            that involve power or anaerobic bursts like lifting, throwing, or jumping, social activities like intimidation, persuasion, or deception,
            and mental tasks that involve using "brute force" solutions.
          </p>
        </Section>
        <Section header="Using Flight" metabolized="Flight">
          <p>Flight is your ability avoid unwanted changes, as well as achieve and maintain a position.</p>
          <p>
            Use Flight any time you are trying to avoid harm, endure hardship, or move somewhere. This typically includes all defenses in combat,
            sustained aerobic athletic activities like climbing or distance running, social activities like resisting influence or maintaining
            composure, and mental activities like identifying tricks or paths that lead to bad outcomes.
          </p>
        </Section>
        <Section header="Using Focus" metabolized="Focus">
          <p>Focus is your ability to direct and maintain attention or sense and interpret situations.</p>
          <p>
            Use Focus any time you want to notice a detail, think your way out of a problem, or be in the right place at the right time. This includes
            initiative in combat, trying to succeed in athletic activities through strategy instead of athleticism, social skills like being witty or
            thoughtful, and mental skills that involve knowledge, memory, attention, or complexity.
          </p>
        </Section>
      </Section>
      <Break />
      <Section header="Hidden Metabolisms" isChapterIntroColumn isClassified>
        <p>Hidden Metabolism choice is primarily concerned with where your response to the challenge takes place.</p>
        <Section header="Using Self" metabolized="Self">
          <p>Self is the hidden body's ability to aid the physical body.</p>
          <p>
            Use Self any time you are trying to push your body beyond its normal limits. This includes unarmed combat, a wide range of athletic
            activities involving power, endurance, or adrenaline, as well as social activities or mental activities that require willpower, patience,
            or managing your emotions.
          </p>
        </Section>
        <Section header="Using Near" metabolized="Near">
          <p>Near is the hidden body's ability to sense and act in your immediate surroundings and understand connections.</p>
          <p>
            Use Near any time you are trying to interact with your surroundings with finesse, speed, and precision. This typically includes armed
            melee content, athletic activities that involve skillful movements or avoiding obstacles, social activities involving body language, and
            mental activities that involve searching for connections between concepts.
          </p>
        </Section>
        <Section header="Using Far" metabolized="Far">
          <p>Far is the hidden body's ability to sense and act over distances, understand other minds, or make predictions.</p>
          <p>
            Use Far any time you are trying to empathize with others as well as understand or interact with things outside of your reach. This
            includes ranged combat, athletic activities that involve situational awareness, good aim, or predicting opponents, a wide range of social
            activities that involve understanding what others may be thinking, and mental activities that involve an eye for details or making plans
            for the future.
          </p>
        </Section>
      </Section>

      <Break page />

      <Section header="Challenges">
        <p>
          Typically you can just describe what your character does in any situation. However, if an action or event involves exertion, risk, or the
          possiblity of failure, it needs to be resolved as a Challenge.
        </p>
        <Section header="Steps to Resolve Challenges" isInset>
          <ol>
            <li>
              The GM decides the <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink> and the
              <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> of the Challenge.
            </li>
            <li>
              The player chooses a pair of <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> to use.
            </li>
            <li>
              The player tries to adjust <Crosslink target={topics.COMPLICATION}>Complications</Crosslink>.
            </li>
            <li>
              Count how much <Crosslink target={topics.PROGRESS}>Progress</Crosslink> was produced.
            </li>
            <li>
              Compare the <Crosslink target={topics.PROGRESS}>Progress</Crosslink> to the <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink>
              to determine the results.
            </li>
            <li>
              Spend any <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> points you need to.
            </li>
          </ol>
        </Section>
        <p>
          Challenges may sometimes have <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> applied to them that remove or modify these
          steps. For example, certain Challenges may require you to roll <Crosslink target={topics.DICE}>dice</Crosslink> or spend more or less
          <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> points when you are counting
          <Crosslink target={topics.PROGRESS}>Progress</Crosslink>. You can also Take Time to do a Challenge carefully in order to remove these
          <Crosslink target={topics.COMPLICATION}>Complications</Crosslink>, or <Crosslink target={topics.PUSH_YRSELF}>Push Yourself</Crosslink> in
          order to attempt things that are more difficult than they could do otherwise.
        </p>
        <Section header="Difficulty and Context">
          <p>
            The game master will set a Difficulty number for the <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>. This is the target number
            the player must match or beat to succeed at the Challenge.
          </p>
          <Section header="Difficulty Scales" isInset>
            <p>0 - 3 Anyone can reliably do this if there are no complications.</p>
            <p>3 - 6 Experts can reliably do this, others need extra effort and luck.</p>
            <p>6 - 12 Even experts need extra effort and luck to do this, it's practically impossible for others.</p>
            <p>12 - 18 Superhuman ability is required, but still appears plausibly normal to witnesses.</p>
            <p>18 - 36 Even with superhuman ability, extra effort and luck are needed. The attempt appears overtly supernatural to witnesses.</p>
          </Section>
          <p>
            In addition to the Difficulty, the GM should describe any additional context related to the
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> by answering the following questions:
          </p>
          <p>
            Are any <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> ill suited to the Challenge? If so, the Difficulty may be increased
            if these are used.
          </p>
          <p>
            Is there any urgency to the <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> or
            <Crosslink target={topics.CONSEQUENCE}>consequences</Crosslink> if you
            <Crosslink target={topics.TAKE_TIME}>Take Time</Crosslink> with it?
          </p>
          <p>
            Do any <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> apply to the
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>?
          </p>
          <p>What are the consequences for failure?</p>
          <p>
            When communicating this context to the players, it is filtered through what the character would be aware of. Often, a player can know the
            exact Difficulty number. However, depending on the situation and what the character can perceive, you may only get hints at the other
            parts of the context.
          </p>
        </Section>
        <Section header="Metabolism Pairing">
          <p>
            While the GM sets a <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink>, the player chooses a pairing of one
            <Crosslink target={topics.PHYS_METAB}>physical</Crosslink> and one
            <Crosslink target={topics.HIDDEN_METAB}>hidden Metabolism</Crosslink> to use. You may omit one half of the pairing if you don't have
            appropriate <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> available. For example, starting characters often may be missing
            some <Crosslink target={topics.HIDDEN_METAB}>hidden Metabolisms</Crosslink>, so they would choose only a
            <Crosslink target={topics.PHYS_METAB}>physical</Crosslink> one.
          </p>
          <p>
            Most <Crosslink target={topics.CHALLENGE}>Challenges</Crosslink> can potentially be accomplished with many different Metabolism pairings,
            you just have to describe how your character is handling the situation in a way that applies them. The
            <Crosslink target={topics.GAMEMASTER}>GM</Crosslink> has the final say over whether a description is sufficient to justify the chosen
            Metabolisms.
          </p>
          <p>
            Sometimes, often in combat, a <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> will require a specific choice for one or both
            Metabolisms. For example, to throw a punch, you must use <Pair fight self />, and to dodge a bullet you must use <Pair flight far />.
          </p>
          <Section header="Metabolism Pairing Example" isInset>
            <p>
              Your character is trying to sneak into a secure building, so you need to choose what Metabolism pairing you will use to attempt this
              <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>.
            </p>
            <p>
              One pairing you could choose is <Metabolism flight />, to represent how you are moving quickly to avoid your pursuers, and
              <Metabolism far /> to represent that you are trying to maintain awareness of the guard's movements to avoid getting too close.
            </p>
            <p>
              Alternatively, you could choose <Metabolism focus />, to represent watching closely for any security cameras, paired with
              <Metabolism near />, to represent how you are carefully interacting with your environment to remain silent.
            </p>
          </Section>
        </Section>
        <Section header="Counting Progress">
          <p>
            To succeed at a <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>, the player must create an amount of Progress equal to or
            greater than the <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink>. In basic
            <Crosslink target={topics.CHALLENGE}>Challenges</Crosslink> with no <Crosslink target={topics.COMPLICATION}>Complications</Crosslink>, the
            Progress created is equal to the sum of the current values of your <Crosslink target={topics.PAIRING}>paired Metabolisms</Crosslink>.
            Always use the current value, not the maximum. <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> can change the way you
            count Progress, potentially requiring you to buy or roll <Crosslink target={topics.DICE}>dice</Crosslink> to gain
            <Crosslink target={topics.PROGRESS}>Progress</Crosslink>.
          </p>
        </Section>
        <Section header="Spending Metabolisms">
          <p>
            Your Metabolisms are a resource with a current and a maximum value. The maximum value is typically equal to the Metabolism's score, but it
            can be reduced by <Crosslink target={topics.STRESS}>Stress</Crosslink>. When you do any
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>, you must choose one Metabolism in the
            <Crosslink target={topics.PAIRING}>pairing</Crosslink> used on it and reduce its current value by 1.
          </p>
          <p>
            Certain challenges may have negative <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> that force you to spend Metabolism
            points faster, or positive ones that can make it free. The only way to fully restore all Metabolisms to their maximum is by resting for an
            hour or by <Crosslink target={topics.PUSH_YRSELF}>Pushing Yourself</Crosslink> during a
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>.
          </p>
          <Section header="Creating Progress & Spending Metabolisms Example" isInset>
            <ol>
              <li>
                You choose the pairing of <Pair fight self /> for a basic <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>. You were already
                missing a point of <Metabolism fight /> from past events.
              </li>
              <li>
                Add your current 2 points of <Metabolism fight /> to your current 1 point of <Metabolism self />, creating a sum of 3
                <Crosslink target={topics.PROGRESS}>Progress</Crosslink>.
              </li>
              <li>
                You just used <Pair fight self />, so you must deduct a point from one of them.
              </li>
            </ol>
          </Section>
        </Section>
        <Section header="Stress">
          <p>
            Wear and tear accumulated from exertion and conflict is referred to as Stress. Stress can be caused by the
            <Crosslink target={topics.CONSEQUENCE}>consequences</Crosslink> of
            <Crosslink target={topics.CHALLENGE}>Challenges</Crosslink> that have certain Complications, enduring a hardship, or by getting attacked
            in combat. When you take Stress, choose how to distribute the Stress between all affected
            <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink>. Typically, the
            <Crosslink target={topics.PAIRING}>pair of Metabolisms</Crosslink> involved in the current
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> are the ones affected.
          </p>
          <p>
            For each point of Stress a <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> takes, reduce its maximum value by 1. If
            something, such as rest or healing, causes you to remove a point of Stress from a
            <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink>, restore its maximum to 1 point closer to the Metabolism's full score.
          </p>
        </Section>
        <Section header="Depleted Metabolisms">
          <p>
            To stay effective, you'll want to remove avoid negative <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> and and other
            sources of <Crosslink target={topics.STRESS}>Stress</Crosslink> as often as possible. However, things aren't over when a
            <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> is empty. Even when you have no more points remaining in a Metabolism
            pairing, you can still treat any <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> that uses it as if you spent a single point on
            it, but when you do so the action gains the
            <Crosslink target={topics.RISKY}>Risky complication</Crosslink> if it didn't have it already.
          </p>
        </Section>
        <Section header="Recovery">
          <p>
            The primary way to restore maximum <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> that have been reduced by
            <Crosslink target={topics.STRESS}>Stress</Crosslink> is resting. Any time you sleep for several hours, no more than once per day, you
            recover from <Crosslink target={topics.CHALLENGE}>Stress</Crosslink>. Remove all <Crosslink target={topics.CHALLENGE}>Stress</Crosslink>
            from all <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolisms</Crosslink> and remove 1
            <Crosslink target={topics.STRESS}>Stress</Crosslink> from all <Crosslink target={topics.PHYS_METAB}>Physical Metabolism</Crosslink>. Then
            refill the current value of all <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> to their new maximums.
          </p>
          <Section header="Stress and Recovery Example" isInset>
            <ol>
              <li>
                You have your 4/4 <Metabolism focus /> and 1/3 <Metabolism near /> paired for a basic
                <Crosslink target={topics.CHALLENGE}>Challenge.</Crosslink>
              </li>
              <li>
                This creates 5 <Crosslink target={topics.PROGRESS}>Progress</Crosslink> and you must deduct a point from both
                <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink>
              </li>
              <li>
                During this <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> you fall and get hurt, causing 5
                <Crosslink target={topics.STRESS}>Stress</Crosslink> split between <Pair focus near />. You choose put 3
                <Crosslink target={topics.CHALLENGE}>Stress</Crosslink> on <Metabolism focus /> and the remaining 2 on <Metabolism near />.
              </li>
              <li>
                Later, you can rest for an hour to fully refill all your <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> to their
                maximum values, however the maximums have been lowered by <Crosslink target={topics.STRESS}>Stress</Crosslink>.
              </li>
              <li>
                That night you sleep normally, removing all <Crosslink target={topics.HIDDEN_METAB}>hidden metabolism</Crosslink>
                <Crosslink target={topics.STRESS}>Stress</Crosslink> and 1 point of <Crosslink target={topics.STRESS}>Stress</Crosslink> from all
                <Crosslink target={topics.PHYS_METAB}>physical Metabolisms</Crosslink>. All the current values are filled to the new maximum.
              </li>
            </ol>
          </Section>
        </Section>
      </Section>
      <Section header="Complications">
        <p>
          When setting the difficulty of a <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>, the
          <Crosslink target={topics.GAMEMASTER}>GM</Crosslink> may also add any combination of Complications to it. Some Complications are negative
          and make things more difficult or costly, while some are positive and make give you more ways to succeed with less exertion.
        </p>
        <p>
          The <Crosslink target={topics.GAMEMASTER}>GM</Crosslink> sets the initial Complications, but you can try to add or remove them. There are
          three ways to do this, and each way allows you to pick a Complication to add or remove. You can potentially apply all three methods to
          adjust the complications three times, but each method can only be applied to a single
          <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> once.
        </p>
        <p>
          The three methods are, <Crosslink target={topics.TRAITS}>Applying a Trait</Crosslink>,
          <Crosslink target={topics.TAKE_TIME}>Taking Time</Crosslink>, and <Crosslink target={topics.ADVANTAGE}>Finding an Advantage</Crosslink>.
        </p>
        <Section header="Applying Traits">
          <p>
            If you have one or more Traits that are relevant to the <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>, you can add or remove
            one complication. Traits are relevant if they can somehow be leveraged to assist with the
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>. For example, a Trait called Medical Training would be relevant in a
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>
            treating injuries. Players and GMS are encouraged to be creative and flexible when deciding if Traits are relevant.
          </p>
        </Section>
        <Section header="Taking Time">
          <p>
            You can attempt to Take Time on a <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> to add or remove one complication. This
            represents taking things slowly and carefully or preparing for them in advance. Normally, a
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> is completed as soon as possible, but when you Take Time, things take longer.
            This at least doubles the normal time the it would have taken, with a minimum of adding a few minutes.
          </p>
          <p>
            You have the option to Take Time on all <Crosslink target={topics.CHALLENGE}>Challenges</Crosslink>, but it can be dangerous. The
            <Crosslink target={topics.GAMEMASTER}>GM</Crosslink> will describe the urgency of the situation and if you are aware of any potential
            <Crosslink target={topics.CONSEQUENCE}>consequences</Crosslink> of finishing too slowly. For example, you could be interrupted, draw
            unwanted attention, or even make the
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> fail entirely
          </p>
        </Section>
        <Section header="Finding Advantages">
          <p>
            If you have useful help, distracted opponents, just the right tool for the job, the element of surprise, or otherwise can act from a
            privileged position, you have an advantage. Having one or more advantages lets you add or remove one Complication. It is not always
            possible to find an advantage, the <Crosslink target={topics.GAMEMASTER}>GM</Crosslink> has the final say if your approach can plausibly
            change the Complications the way you intend them to.
          </p>
        </Section>
        <Section header="Positive Complications" isInset>
          <h4>Controlled</h4>
          <p>
            You can plan an approach to this task to reliably bring your best efforts to it. You may select another
            <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> to use in addition to your chosen
            <Crosslink target={topics.PAIRING}>pairing</Crosslink>.
          </p>
          <h4>Relaxed</h4>
          <p>
            This task allows you set your own pace. Choose one involved <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink>, any points that
            would have been spent from it are instead not spent. Because normal challenges only cost points from one
            <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink>, this Complication makes them free.
          </p>
          <h4>Satisfying</h4>
          <p>
            This task involves a big milestone, built in rewards, or one of your character's interests. If you succeed, choose a
            <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> that was not used on this task. This Metabolism regains a number of points
            equal to the amount of <Crosslink target={topics.PROGRESS}>Progress</Crosslink> you created.
          </p>
        </Section>
        <Section header="Negative Complications" isInset>
          <h4>Risky</h4>
          <p>
            Something physical, competitive, or chaotic. Even your best effort could still fail. Each point of
            <Crosslink target={topics.PROGRESS}>Progress</Crosslink> that would normally be created instead grants you one die to roll with a chance
            of creating <Crosslink target={topics.PROGRESS}>Progress</Crosslink> or <Crosslink target={topics.CHALLENGE}>consequences</Crosslink>.
          </p>
          <h4>Strenuous</h4>
          <p>
            This requires physical or mental effort. Instead of spending 1 point from one involved
            <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> to create full <Crosslink target={topics.PROGRESS}>Progress</Crosslink>, you
            need to spend any combination of points from your <Crosslink target={topics.PAIRING}>paired Metabolisms</Crosslink>. The
            <Crosslink target={topics.PROGRESS}>Progress</Crosslink> created is equal to the number of points spent.
          </p>
          <h4>Stressful</h4>
          <p>
            The mind or body are strained by this task. Regardless of success or failure, this will cause a point of
            <Crosslink target={topics.STRESS}>Stress</Crosslink> to your one of your <Crosslink target={topics.PAIRING}>paired Metabolisms</Crosslink>
            .
          </p>
        </Section>
        <Section header="Rolling Dice">
          <p>
            Dice are only needed if a <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> is <Crosslink target={topics.RISKY}>Risky</Crosslink>
            . Replace each point of <Crosslink target={topics.PROGRESS}>Progress</Crosslink> that would have been created for this challenge with a
            six sided die, and then roll these dice. Each die that has a result of 4 or greater increases the
            <Crosslink target={topics.PROGRESS}>Progress</Crosslink> by one. Any die that comes up 6 "explodes" and gets rerolled, potentially
            increasing <Crosslink target={topics.PROGRESS}>Progress</Crosslink>
            further or even coming up 6 again and getting rerolled again.
          </p>
        </Section>
        <Section header="Consequences">
          <p>
            Be careful with <Crosslink target={topics.RISKY}>Risky Challenges</Crosslink>, they can cause extra consequences. If you roll
            <Crosslink target={topics.DICE}>dice</Crosslink> and end up with 0 <Crosslink target={topics.PROGRESS}>Progress</Crosslink>
            your failure is especially bad and causes a consequence. Also, if your <Crosslink target={topics.PROGRESS}>Progress</Crosslink> is exactly
            equal to the <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink> you must choose if you simply fail, or if you succeed at the
            cost of causing a consequence. The <Crosslink target={topics.GAMEMASTER}>GM</Crosslink> may also add a consequence when you choose to
            <Crosslink target={topics.TAKE_TIME}>Take Time</Crosslink> at an inopportune moment. Any time a consequence occurs, choose a
            <Crosslink target={topics.PROGRESS}>Metabolism</Crosslink> in your
            <Crosslink target={topics.PAIRING}>pairing</Crosslink> to take a point of <Crosslink target={topics.STRESS}>Stress</Crosslink>, and the
            <Crosslink target={topics.GAMEMASTER}>GM</Crosslink>
            will describe an additional problem that was caused during the <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>. Consequences
            only occur when there is a set <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink> number. They don't occur when comparing one's
            <Crosslink target={topics.ACTION}>action to a reaction</Crosslink>, such as when attacking and defending in combat.
          </p>
        </Section>
        <Section header="Complications & Dice Example" isInset>
          <p>
            You're trying to sneak into a building. Because it is a secure area with big consequences for being caught, the
            <Crosslink target={topics.GAMEMASTER}>GM</Crosslink> decides the <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>
            is <Crosslink target={topics.RISKY}>Risky</Crosslink>, <Crosslink target={topics.STRENUOUS}>Strenuous</Crosslink>, and
            <Crosslink target={topics.STRESSFUL}>Stressful</Crosslink> and has a <Crosslink target={topics.DIFFICULTY}>difficulty</Crosslink> of 4.
            You <Crosslink target={topics.TAKE_TIME}>Take Time</Crosslink> by carefully scouting the area before proceeding, so you can adjust the
            <Crosslink target={topics.COMPLICATION}>Complications</Crosslink>. You choose to remove
            <Crosslink target={topics.STRESSFUL}>Stressful</Crosslink>, so you won't take <Crosslink target={topics.STRESS}>Stress</Crosslink> just
            for attempting it.
          </p>
          <ol>
            <li>
              First choose your <Crosslink target={topics.PAIRING}>Metabolism pair</Crosslink>. You choose <Metabolism focus /> to represent being
              careful and <Metabolism far /> to represent that you are trying to keep close track of your pursuer's movements without getting close to
              them.
            </li>
            <li>
              Because it's <Crosslink target={topics.STRENUOUS}>Strenuous</Crosslink> you need to buy your
              <Crosslink target={topics.PROGRESS}>Progress</Crosslink>. You choose to spend 3 <Metabolism focus /> and 1 <Metabolism far />. Because
              it's <Crosslink target={topics.RISKY}>Risky</Crosslink> this buys you 4 <Crosslink target={topics.DICE}>dice</Crosslink> to roll instead
              of 4<Crosslink target={topics.PROGRESS}>Progress</Crosslink>.
            </li>
            <li>
              You roll 2, 4, 6, and 6. Three of those are 4 or better, so that's 3 points of <Crosslink target={topics.CHALLENGE}>Progress</Crosslink>
              .
            </li>
            <li>
              6's always explode, so you reroll both 6's, getting a 4 and a 5. That's two <Crosslink target={topics.DICE}>dice</Crosslink> that are 4
              or above, so your
              <Crosslink target={topics.CHALLENGE}>Progress</Crosslink> increases to 5.
            </li>
            <li>
              You beat the <Crosslink target={topics.DIFFICULTY}>difficulty</Crosslink>! You succeed and get into the building undetected.
            </li>
          </ol>
        </Section>
        <Section header="Pushing Yourself">
          <p>
            If you are unable to get as much <Crosslink target={topics.PROGRESS}>Progress</Crosslink> as you need to succeed at a
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>, you can Push Yourself to give an extra effort. Doing so immediately refills
            all of your <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> pools, and gives you a second chance to spend more of them on
            this <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>. You must spend at least one additional point when you do this.
          </p>
          <p>
            This allows you to spend up to double what your <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> would normally allow,
            however, it comes with some risks. First, it makes the action <Crosslink target={topics.RISKY}>Risky</Crosslink> if it wasn't already: you
            need roll <Crosslink target={topics.DICE}>dice</Crosslink> to get any additional <Crosslink target={topics.PROGRESS}>Progress</Crosslink>
            and the chance exists to cause
            <Crosslink target={topics.CONSEQUENCE}>consequences</Crosslink> if you roll poorly. If the
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> was already <Crosslink target={topics.RISKY}>Risky</Crosslink> when you Push
            Yourself, it also becomes <Crosslink target={topics.STRESSFUL}>Stressful</Crosslink>. If it was already
            <Crosslink target={topics.STRESSFUL}>Stressful</Crosslink>, this causes two points of <Crosslink target={topics.STRESS}>Stress</Crosslink>
            instead of one.
          </p>
          <p>
            You must decide to Push Yourself after you've finalized <Crosslink target={topics.COMPLICATION}>Complications</Crosslink>, counted your
            initial <Crosslink target={topics.PROGRESS}>Progress</Crosslink>, and then failed. Therefore, the extra
            <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> created by Pushing Yourself can never be removed, and you can't Push
            Yourself just for the sake of restoring your <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink>.
          </p>
        </Section>
        <Section header="Pushing Yourself Example" isInset>
          <ol>
            <li>
              In a <Crosslink target={topics.STRENUOUS}>Strenuous Challenge</Crosslink> with a
              <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink> of 4, your
              <Crosslink target={topics.PAIRING}>Metabolism pairing</Crosslink> has 2 points remaining.
            </li>
            <li>
              You spend those last points to create 2 <Crosslink target={topics.PROGRESS}>Progress</Crosslink>. But it's not enough!
            </li>
            <li>
              Push Yourself to refill all <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink>.
            </li>
            <li>
              You can now add more to the <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>. You spend 3 more, but they now buy
              <Crosslink target={topics.DICE}>dice</Crosslink> because Pushing Yourself makes it <Crosslink target={topics.RISKY}>Risky</Crosslink>.
              You roll 1, 4, and 5, adding 2 more
              <Crosslink target={topics.PROGRESS}>Progress</Crosslink>.
            </li>
            <li>
              You've created 4 total <Crosslink target={topics.PROGRESS}>Progress</Crosslink>. Because the
              <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> became Risky and you only tied the
              <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink>, you can now only succeed by causing a
              <Crosslink target={topics.CHALLENGE}>Consequence</Crosslink>. When you do, you take a point of
              <Crosslink target={topics.STRESS}>Stress</Crosslink>.
            </li>
          </ol>
        </Section>
      </Section>
      <Break page />
    </Section>
  );
}

export default Chapter3;
