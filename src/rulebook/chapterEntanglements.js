import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Break from "../components/break/break";
import Section from "../components/section/section";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import SpecializationDescription from "../components/section/spec-desc";
import EntanglementDescription from "../components/section/ent-desc";
import EventDescription from "../components/section/event-desc";
import StyleDescription from "../components/section/style-desc";
// import Crosslink from "../components/crosslink/crosslink";
import Pair from "../components/metabolism/pair";
import Metabolism from "../components/metabolism/metabolism";
import ChallengeParams from "../components/challengeParams/challengeParams";

function ChapterEntanglements() {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;

  return (
    <Section
      coordinates={"7"}
      header="Entanglements"
      topicKey="entanglementsChapter"
      introContent={
        <ChapterIntroSpread
          chapterNumber={7}
          title="Entanglements"
          leftPageContent={
            <>
              <h3>The 9 Intuitive Styles</h3>
              <p>
                Each Entanglement contains specializations sorted into two styles, one intuitive and one esoteric. The
                Intuitive Styles improve the existing capabilities of the body and mind.
              </p>
              <h4>Strong</h4>
              <p>
                Pairs <Pair fight self /> to enhance unarmed attacks, grappling, and power.
              </p>
              <h4>Smooth</h4>
              <p>
                Pairs <Pair fight near /> to enhance melee attacks, stealth, and finesse.
              </p>
              <h4>Sharp</h4>
              <p>
                Pairs <Pair fight far /> to enhance ranged attacks and precision.
              </p>
              <h4>Tough</h4>
              <p>
                Pairs <Pair flight self /> to enhance unarmed defense and stamina.
              </p>
              <h4>Mobile</h4>
              <p>
                Pairs <Pair flight near /> to enhance melee defense, agility, and speed.
              </p>
              <h4>Quick</h4>
              <p>
                Pairs <Pair flight far /> to enhance ranged defense, wits, and prediction.
              </p>
              <h4>Confident</h4>
              <p>
                Pairs <Pair focus self /> to enhance willpower and executive function.
              </p>
              <h4>Bright</h4>
              <p>
                Pairs <Pair focus near /> to enhance intelligence and creativity.
              </p>
              <h4>Alert</h4>
              <p>
                Pairs <Pair focus far /> to enhance physical and social awareness.
              </p>
            </>
          }
          rightPageContent={
            <>
              <h3>The 9 Esoteric Styles</h3>
              <p>
                Esoteric Styles represent more unusual approaches to solving the same problems. They provide new, often
                overtly supernatural, abilities the body is normally incapable of.
              </p>
              <h4>Schizosomata</h4>
              <p>
                Pairs <Pair fight self /> to radically transform or empower the physical body.
              </p>
              <h4>Electromagnetism</h4>
              <p>
                Pairs <Pair fight near /> to control the fundamental force of light or electricity.
              </p>
              <h4>Evocation</h4>
              <p>
                Pairs <Pair fight far /> to create explosive and destructive blasts.
              </p>

              <h4>Abjuration</h4>
              <p>
                Pairs <Pair flight self /> to create durable barriers, wards, and filters.
              </p>
              <h4>Gravitonertia</h4>
              <p>
                Pairs <Pair flight near /> to control the fundamental force of mass and motion.
              </p>
              <h4>Pneumaplegia</h4>
              <p>
                Pairs <Pair flight far /> to make fields that help and hinder others.
              </p>

              <h4>Sublimation</h4>
              <p>
                Pairs <Pair focus self /> to traverse hidden space intangibly and invisibly.
              </p>
              <h4>Chromodynamism</h4>
              <p>
                Pairs <Pair focus near /> to control the fundamental force that binds atoms.
              </p>
              <h4>Telethesia</h4>
              <p>
                Pairs <Pair focus far /> to sense and manipulate other minds.
              </p>
            </>
          }
        ></ChapterIntroSpread>
      }
    >
      <Section header="Fight + Self">
        <p>
          This entanglement allows one to augment or alter their physical form. Mastering it can grant you peerless
          unarmed offense, superhuman strength, or the ability to transform your body.
        </p>
        <EntanglementDescription
          hidMet={<Metabolism self />}
          physMet={<Metabolism fight />}
          esoStyle={"Schizosomata"}
          intStyle={"Strong"}
        />

        <Break />
        <Section header="Strong Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Fight + Self boosts the brute physical strength of the body
                and the efficacy of Unarmed Attacks.
              </p>
            }
            styleName="Strong"
            associatedAction="Unarmed Attack actions"
            rank1Bonus="Fighting up close and personal allows you to disable opponents quickly. When you cause Stress with an Unarmed Attack, you may choose which Physical Metabolism is in the pair that the Stress is dealt to instead of it always being Flight."
          />
          <Section header="Brawler" isInset>
            <SpecializationDescription
              intro={<p>You can seamlessly blend armed and unarmed close combat, gaining the best of both worlds.</p>}
              ranks={[
                <p>You may replace the Self component of Unarmed Attack Challenges with Near.</p>,
                <p>You may replace the Near component of armed Melee Attack Challenges with Self. </p>,
                <p>
                  When you Prepare a Melee or Unarmed Attack, you can add either Self or Near to it instead of Focus.
                  You do not need a free hand to inflict or maintain the Grappled state.
                </p>,
              ]}
            />
          </Section>
          <Section header="Explosive Strength" isInset>
            <SpecializationDescription
              intro={
                <p>
                  By learning to deploy increased strength instantly and with precise timing, you can greatly increase
                  the power behind explosive movements.
                </p>
              }
              ranks={[
                <p>
                  When you charge an enemy by using your inhale action to Move in a straight line to a target and then
                  strike it with a Melee or Unarmed Attack, you can put your whole weight and strength into the strike.
                  This lets you add your Strong rank as extra Progress to the attack that can only be used on the
                  Grapple or Off Balance Goals.
                </p>,
                <p>
                  The distance you can jump is tripled. Any obstacle that can be jumped over cannot increase the Risk or
                  add additional fixed Goals to a Move action.
                </p>,
                <p>
                  When you use the free movement from making a Melee or Unarmed Attack, you can move an extra meter as
                  long as you use it to move directly towards the target before the attack.
                </p>,
              ]}
            />
          </Section>
          <Section header="Iron Grip" isInset>
            <SpecializationDescription
              intro={<p>You can use weapons that would normally be too large to wield effectively.</p>}
              ranks={[
                <p>You cannot be disarmed against your will. You can wield a weapon of size 3 in one hand.</p>,
                <p>Weapons of size 4 can be used without being Prepared.</p>,
                <p>You can wield weapons of size 4 in one hand.</p>,
              ]}
            />
          </Section>
          <Section header="Lifting Capacity" isInset>
            <SpecializationDescription
              intro={<p>You can lift objects beyond what your physique would normally allow.</p>}
              ranks={[
                <p>You can reliably lift 300 kilograms.</p>,
                <p>
                  You can reliably lift 600 kilograms. Any non-attack Challenge that is primarily about raw physical
                  strength is always low Risk.
                </p>,
                <p>
                  You can reliably lift 1200 kilograms. Any non-attack Challenge that is primarily about raw physical
                  strength is always low Effort.
                </p>,
              ]}
            />
          </Section>
          <Section header="Martial Artist" isInset>
            <SpecializationDescription
              intro={<p>Your empty hands have become powerful weapons.</p>}
              ranks={[
                <p>Your Unarmed Attack can use the Off Balance Goal in the same way Melee Attacks can.</p>,
                <p>
                  When you make an Unarmed Attack, you can choose for it to hit as if it were either a blunt or bladed
                  weapon of size 1.
                </p>,
                <p>Your reach with Unarmed Attacks increases by 1 meter.</p>,
              ]}
            />
          </Section>
          <Section header="Reverberation" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can harness the latent tension created by dynamic situations and store it for later, amplifying
                  yourself, and then unleash the energy later.
                </p>
              }
              ranks={[
                <p>
                  Any time you participate in a Challenge with at least a medium risk and effort level, you may add an
                  extra Goal called Reverberation. Any Progress applied to Reverberation doesn't affect the current
                  Challenge. Instead it is stored for later, reverberating back and forth between your physical and
                  hidden bodies. In any future Challenge, you can remove all of your stored Progress and apply it to
                  that Challenge. You must use all of it at once, you can't use only a portion of it. While you have
                  Progress stored in this way you feel anxious and uneasy. All stored Progress is lost at the end of the
                  scene.
                </p>,
                <p>
                  While you have stored Progress, you no longer feel anxious. If fact, you feel alive and confident. If
                  you use the stored Progress on a Challenge that is primarily social, you have Advantage.
                </p>,
                <p>
                  While you have stored Progress, you are perceived as more real and powerful granting you Advantage on
                  every Challenge that is primarily social, even if you don't use the stored progress on it.
                </p>,
              ]}
            />
          </Section>
        </Section>

        <Break />

        <Section header="Schizosomata Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style entangles Fight + Self to enable the discipline of the “split body” which allows one
                to develop ways to temporarily reshape the body, rewire the brain, and boost your physical capabilities.
              </p>
            }
            styleName="Schizosomata"
            rank1Bonus="You can induce the Empower cascade event."
            associatedAction="inducing Empower events"
          />
          <EventDescription
            eventName="Empower"
            intro="You focus on your physical form, altering and improving it for a short time."
            linkTarget={linkMap.SchizosomataStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ fight: true, self: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Schizosomata Style"}
                  goals={["Capacity"]}
                />
                <p>
                  Increase the capacity, but not the current value, of your Self Metabolism by the result of the
                  Capacity Goal, and then you enter a special State called Empowered.
                </p>
                <h5>The Empowered State</h5>
                <p>
                  While in this state your appearance undergoes minor but noticeable changes, appearing stronger, more
                  intimidating, more beautiful, or unearthly in some way, as you see fit. You cannot induce this event
                  again while you have the Empowered state.
                </p>
                <p>
                  At the end of every turn after the turn you induced this event, this State decays. If your Self
                  capacity is greater than your Self score it takes a point of Stress. If it is not, you lose the
                  Empowered State.
                </p>
                <h5>Strain</h5>
                <p>
                  Your heightened Self capacity is a resource that some Specializations in this Style consume by causing
                  Strain. To Strain, you take a point of Stress to Self. You can only Strain while in the Empowered
                  State
                </p>
                <h5>Immediate Effects</h5>
                <p>
                  In addition to empowering you for further action, this event also causes immediate effects. After you
                  induce this event as an exhale action, the immediate effect is that you can instantly Rest or
                  Manipulate without consuming an action.
                </p>
                <p>
                  Certain Specializations within this Style allow you to induce this event at other times than as an
                  exhale action, triggering different immediate effects when you do.
                </p>
              </>
            }
          />
          <Section header="Combat Form" isClassified>
            <SpecializationDescription
              intro={<p>You can transform your body to become have natural weapons and armor.</p>}
              ranks={[
                <p>
                  You can induce Empower as an inhale action. When you do this the immediate effect is that your next
                  attack you make this turn is Prepared.
                </p>,
                <p>
                  When you are Empowered you can choose to have natural weapons grow out of your body. When making
                  Unarmed Attacks you may replace your Strong rank with you Schizosomata rank in the attack's allocation
                  bonus, or you may Strain to add both bonuses simultaneously.
                </p>,
                <p>
                  When you are Empowered you can harden your skin into effective armor. Replace the armor rating of any
                  armor you are wearing with your Schizosomata rank while empowered.
                </p>,
              ]}
            />
          </Section>
          <Section header="Empowered Healing" isClassified>
            <SpecializationDescription
              intro={<p>You can physically repair the body instead of reshaping it and Empower others.</p>}
              ranks={[
                <p>
                  Any time you use the Heal action you can induce Empower as part of the same action. The target of the
                  Heal action gains the benefits of Empower, but no additional immediate effect occurs. Targeting
                  someone other than yourself this way consumes materials from your own body, causing a point of Stress
                  to Fight, but does not require medical equipment.
                </p>,
                <p>
                  Your Heal action can remove the Dying state and now restores the capacity of every injured Physical
                  Metabolism instead of just one.
                </p>,
                <p>
                  When using Heal and Empower as the same action, after resolving the Heal effect the Empower event can
                  cause further healing. For each point of the Progress on the Capacity Goal, you can remove a point of
                  Stress from any Physical Metabolism or use it normally to increase the Self Capacity by 1.
                </p>,
              ]}
            />
          </Section>
          <Section header="Hemokinesis" isClassified>
            <SpecializationDescription
              intro={<p>Your mastery of biology allows you to manipulate the blood itself when it is spilled.</p>}
              ranks={[
                <p>
                  You can induce Empower as a reaction to gaining an injury State. If you do, the immediate effect is
                  that your lost blood coagulates into a hard structure around your wounds, increasing your armor rating
                  by by 1. You retain this armor for as long as you have this injury state or the Empowered state.
                </p>,
                <>
                  <p>
                    You can induce Empower as a reaction to anyone within your reach gaining an injury State. When you
                    do this, the target is the injured person and you can use either the normal Capacity Goal, or an
                    alternative Goal Hemorrhage, but not both at the same time.
                  </p>
                  <p>
                    If you use Capacity, the injured person gains the benefits of being empowered as if you had induced
                    the event targeting yourself, including the armor described by the previous rank.
                  </p>
                  <p>
                    If you use Hemorrhage, you leverage the target's blood loss against them, causing painful sharp
                    clots, high pressure sprays, or dangerous pressure drops. The target takes an additional amount of
                    Stress equal to the Hemorrhage Goal, divided among their remaining Physical metabolisms as you see
                    fit.
                  </p>
                </>,
                <p>
                  When inducing Empower as a reaction to an injury state on yourself or an adjacent target, you can use
                  both the Capacity and Hemorrhage Goals simultaneously. When you do, you can spread the Self capacity
                  gains and extra Stress taken as you see fit between every person adjacent to you or the target. All
                  targets that gain Capacity gain the Empowered state and a point of armor that lasts as long as this
                  state does.
                </p>,
              ]}
            />
          </Section>
          <Section header="Rage" isClassified>
            <SpecializationDescription
              intro={<p>When Empowered, adrenaline pushes you beyond the limits of your body.</p>}
              ranks={[
                <p>
                  You can induce the Empower event as a reaction to taking Stress from an attack. If you do, the
                  immediate effect reduces the amount of Stress taken by your Schizosomata rank.
                </p>,
                <p>
                  You can Strain to double your lifting capacity and gain Advantage on all Challenges involving feats of
                  Strength for the next minute.
                </p>,
                <p>
                  When you regain Metabolism points at the start of a turn, you can Strain to ignore any injury or
                  dissociation states until your next turn. When you do so, any Physical Metabolism that would regain 0
                  points instead regains points equal to your Schizosomata rank.
                </p>,
              ]}
            />
          </Section>
          <Section header="Shapeshift" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  While the hidden body is mutable, the physical body is typically more static. This specialization
                  changes that, allowing you transform yourself permanently.
                </p>
              }
              ranks={[
                <p>
                  You permanently become an idealized version of yourself. You decide whether that means attractive,
                  youthful, intimidating, matching the ideal of a specific subculture, or any other appearance you
                  aspire to. Gain a Trait that describes this appearance.
                </p>,
                <p>
                  Over the course of an hour you can slowly and permanently transform yourself into any appearance,
                  build, gender, voice, or skin color you wish. This change can only roughly imitate specific other
                  people, if someone examines you closely they can tell you are an impostor. For every 10 kilograms or
                  centimeters of height that your new body differs from your original body, you must take a point of
                  Stress to Self.
                </p>,
                <>
                  <p>
                    Over the course of an hour, you can permanently move a point from one Physical Metabolism score to
                    another. The minimum score a metabolism can attain this way is 2.
                  </p>
                  <p>You can also now perfectly mimic another person when you transform.</p>
                  <p>
                    Additionally, you can make the transformations allowed by this Specialization instantly as an exhale
                    action instead of over an hour, but doing so is highly stressful and reduces both your Fight and
                    Self capacities to 1 bringing you to the brink of injury and dissociation.
                  </p>
                </>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />

      <Section header="Fight + Near">
        <p>
          Mastering this Entanglement can grant you peerless melee offense or the ability to modify light and
          electricity.
        </p>
        <EntanglementDescription
          physMet={<Metabolism fight />}
          hidMet={<Metabolism near />}
          esoStyle={"Electromagnetism"}
          intStyle={"Smooth"}
        />

        <Section header="Smooth Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Fight + Near refines your skill with melee combat and
                finesse.
              </p>
            }
            styleName="Smooth"
            rank1Bonus="When anyone uses the Move action to enter or exit the area within 1 meter of you, you may Counterattack. Free movement from any action other than Move does not trigger this response. When you Counterattack, the original attacker takes Threat equal to your Smooth rank and must make the appropriate reaction. Specializations in this style add additional Counterattack effects and triggers."
            associatedAction="Melee Attack actions"
          />
          <Section header="Ambidexterity" isInset>
            <SpecializationDescription
              intro={
                <p>You can split your proprioceptive awareness between both hands without any loss of coordination.</p>
              }
              ranks={[
                <p>
                  When wielding a weapon in each hand, you can strike with both as a single Melee or Ranged Attack
                  action. Add the Size values of both weapons to the Progress generated by the attack instead of just
                  one, but you must allocate a minimum number of Metabolism points equal to their combined Size. Both
                  attacks must have the same target and must be melee or ranged, you can't mix types.
                </p>,
                <p>
                  When making a dual-weapon attack, you may divide the Progress applied to Threat, or any other Goal of
                  the attack, between two different targets.
                </p>,
                <>
                  <p>
                    When making a dual-weapon attack, one of your weapons, the smaller one of they are different sizes,
                    no longer counts toward the minimum Metabolism allocation required for the attack, though you still
                    add its Size to your Progress.
                  </p>
                  <p>
                    Additionally, if you're holding both a ranged and a melee weapon and your attack is Prepared,
                    instead of adding Focus as the third metabolism you may use the trio of Fight + Near + Far to attack
                    both a ranged enemy and a melee enemy with the same attack.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Counter" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can punish opponents for letting their guard down and use the momentum of their failed attacks
                  against them.
                </p>
              }
              ranks={[
                <p>
                  Your Melee or Unarmed Defense Reactions to attacks made on an enemy's turn have an additional Goal
                  called Counter. If Progress is assigned to Counter, you may Counterattack after your Reaction dealing
                  extra Threat equal to the amount of Counter Progress.
                </p>,
                <p>Enemies using inhale actions or Ranged attacks within your reach trigger your Counterattack. </p>,
                <p>
                  If you apply an amount of Progress to the Counter Goal that is equal to or greater than the size of
                  the weapon you are using, you can add the weapon's size to the Threat dealt by the Counterattack.
                </p>,
              ]}
            />
          </Section>
          <Section header="Opportunist" isInset>
            <SpecializationDescription
              intro={<p>You can easily find and devastatingly exploit any gaps in an enemy's defenses. </p>}
              ranks={[
                <p>
                  When you attack an enemy with the Off Balance state, resolve the attack as if you were Hidden from
                  them.
                </p>,
                <p>
                  When you deal more Stress to a target with a Melee or Unarmed attack than it can take due to the
                  Metabolisms used in it's defense Reaction being reduced to 0 capacity, then the extra Stress is dealt
                  directly to all of the target's remaining Physical Metabolisms, instead of just one of them.
                </p>,
                <p>
                  If an enemy is within reach of a Melee or Unarmed Attack from you and an ally that is on the opposite
                  side of the space the enemy occupies, then this enemy is flanked. Resolve any attacks you make against
                  them as they were Off Balance and you were Hidden.
                </p>,
              ]}
            />
          </Section>
          <Section header="Silence" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can exert a subtle influence over nearby objects that prevents vibrations and sound from
                  propagating.
                </p>
              }
              ranks={[
                <p>You can move completely silently at any speed.</p>,
                <p>
                  As an exhale action, you can take a normal effort and low risk Challenge requiring Fight + Near, to
                  prevent sound from propagating in an area. The radius of this area in meters and the number of minutes
                  it lasts are both equal to the Progress used to create it. No sound or vibration can be heard, felt,
                  or created inside the area. The area is centered on you and follows you as you move.
                </p>,
                <p>
                  You can silence an area as an inhale action instead of an exhale action. When you silence an area, you
                  can still hear normally while inside it and you can if it stays at its initial location instead of
                  following you.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sleight of Hand" isInset>
            <SpecializationDescription
              intro={<p>You can interact with things undetected and without permission.</p>}
              ranks={[
                <>
                  <p>
                    When you use the Interact action, you can do so without anyone noticing. If you do this to draw a
                    weapon unnoticed on the first round in combat, you have advantage on the next attack you take with
                    it.
                  </p>
                  <p>Additionally, you can quickly draw, stow, swap, or reload any weapon without using any actions.</p>
                </>,
                <p>
                  If you are Hidden, you can use the Interact action to interact with, plant, or steal object in
                  someone's pockets or bags without being noticed. Alternatively, if you Improvise as an Inhale action
                  to create a diversion, you can Interact as if you were Hidden on your next exhale action.
                </p>,
                <p>
                  If you are Hidden or the target is Off Balance, you can use the Interact action to take an object from
                  someone's hands, however doing so will always be noticed. If this object was a weapon, you have
                  Advantage on attacking with it if you do so as your next action.
                </p>,
              ]}
            />
          </Section>
          <Section header="Weapon Master" isInset>
            <SpecializationDescription
              intro={<p>You make the most of any weapon you're holding. </p>}
              ranks={[
                <>
                  <p>
                    Drawing, stowing, swapping, or reloading weapons can be done during your turn without using any
                    actions.
                  </p>
                  <p>
                    Double the bonus for the type of melee weapon you are wielding. Blunt weapons now deal 2 extra Off
                    Balance and bladed weapons now deal 2 extra Threat, instead of 1.
                  </p>
                </>,
                <p>
                  The bonus for the type of melee weapon you are wielding is further improved. When you deal Stress to a
                  target with a blunt weapon you may push the target 1 meter away from you, and when you attack with a
                  bladed weapon it ignores 1 point of the target's armor.
                </p>,
                <>
                  <p>Your reach while wielding a weapon increases by 1 meter.</p>
                  <p>
                    Additionally, any object you are holding counts as a blunt, bladed, or ranged weapon, not an
                    improvised weapon. Although fragile objects may still break after being used as a weapon.
                  </p>
                </>,
              ]}
            />
          </Section>
        </Section>

        <Break />

        <Section header="Electromagnetism Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the Fight + Near entanglement allows you to control the fundamental force of
                electromagnetism. This ability is primarily expressed through the Refract cascade event.
              </p>
            }
            styleName="Electromagnetism"
            rank1Bonus="You can induce the Refract cascade event."
            associatedAction="inducing Refract events"
          />

          <EventDescription
            eventName="Refract"
            intro="You reach out with your mind and take control of nearby photons."
            linkTarget={linkMap.ElectromagnetismStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ fight: true, near: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Electromagnetism Style"}
                  goals={["Power", "Range"]}
                />
                <p>
                  Bend the path of an existing flow of light, electricity, or magnetism within a number of meters equal
                  to Range. This can, for example, discharge a battery, short circuit a device, reverse a magnet's
                  polarity, or focus sunlight into a beam. This only effects a single object or at most a 1 cubic meter
                  portion of a larger energy flow. Without further Electromagnetism Specializations, this event can only
                  crudely redirect this energy, it cannot create, destroy, increase, decrease, transform, or exercise
                  fine control.
                </p>
                <p>
                  The amount of energy you can control is determined by the Power Goal. The exact strength of a specific
                  energy source is up to the GM, according to the guidelines in the following list. If the result of
                  Power is lower than the strength of the energy source, it cannot be controlled. Other specializations
                  that refer to a Power level are using this scale.
                </p>
                <ul>
                  <li>1: Consumable batteries, single LEDs, fridge magnets, static shocks.</li>
                  <li>2: Indoor lighting, dim indirect daylight, large lithium ion batteries.</li>
                  <li>3: Residential wiring, direct sunlight, rare earth magnets.</li>
                  <li>3-6: Residential overhead power lines, industrial electromagnets.</li>
                  <li>6-9: A lightning strike.</li>
                  <li>9-15: High-tension distribution lines.</li>
                </ul>
                <p>
                  If energy is redirected with the intent to to harm someone, it primarily dazzles, blinds, or stuns. It
                  bypasses armor and triggers no reaction, dealing Stress equal to the Power level directly to a single
                  target's Flight + Near, up to a limit of your rank in the Electromagnetism Style. Any additional Power
                  over this limit is the intensity of a State inflicted on the target, either Suppressed if the energy
                  was primarily light or Off Balance if it was primarily electrical or magnetic.
                </p>
                <p>
                  The effects of Refract last only until your next turn. If you wish for them to continue you just keep
                  inducing the event.
                </p>
              </>
            }
          />

          <Section header="Amplify Waveform" isClassified>
            <SpecializationDescription
              intro={<p>You can use Refract to create electromagnetic energy from nothing.</p>}
              ranks={[
                <>
                  <p>
                    Your Refract event now has a Goal called Create. You cannot use the Create and Destroy Goals in the
                    same event.
                  </p>
                  <p>
                    You can amplify the strength of lower Power energy source affected by Refract, increasing it's Power
                    level to equal the result of the Create Goal.
                  </p>
                </>,
                <>
                  <p>
                    Your Refract event now has a Goal called Radius. The event can now affect everything in an area with
                    this Radius in meters. If this event causes harm, divide the Power level up between the targets as
                    you see fit.
                  </p>
                  <p>
                    You can also quickly create simple lights without using the Refract event. As an inhale action, take
                    a point of Stress to Focus and an object you touch begins emitting light of a color and brightness
                    of your choice, up to a brightness similar to common residential light bulbs. These lights last for
                    the rest of the scene.
                  </p>
                </>,
                <p>
                  You can use Refract to create energy from nothing. When you do this, the value of the Create Goal must
                  equal or exceed the value of the Power Goal, and the final Power level of the event is equal to the
                  Power Goal.
                </p>,
              ]}
            />
          </Section>
          <Section header="Frequency Shift" isClassified>
            <SpecializationDescription
              intro={<p>You can convert one form of energy into another. </p>}
              ranks={[
                <p>
                  When using Refract on light, instead of redirecting the light you can transform it from one wavelength
                  to another. For example, from one color to another or from visible to x-rays.
                </p>,
                <p>
                  When using Refract, instead of redirecting the energy, you can transform it from one type of
                  electromagnetism into another..
                </p>,
                <p>When using Refract, you can transform and redirect an energy flow simultaneously.</p>,
              ]}
            />
          </Section>
          <Section header="Modulate Signal" isClassified>
            <SpecializationDescription
              intro={<p>Your control over electromagnetism is so fine that you can embed information in it. </p>}
              ranks={[
                <>
                  <p>
                    As an exhale action, take a point of Stress to Focus to create a luminous message or image publicly
                    in the air, or privately directly on the retina of someone you can see.
                  </p>
                  <p>
                    Additionally, when your Refract event inflicts the Off Balance or Suppressed state, you may choose
                    for it to instead inflict Enthralled or Afraid.
                  </p>
                </>,
                <>
                  <p>
                    As an exhale action, take a point of Stress to Focus to rewrite any electronic media you can touch,
                    emit a short wireless signal.
                  </p>
                  <p>
                    If you have any ranks in Sense Waveform, you can also intercept and modify signals when you do this.
                  </p>
                </>,
                <>
                  <p>
                    After you spend an hour freely examining any wireless device, you can from then on emit signals it
                    can receive. As an inhale action, you can send a simple command to any device you have examined this
                    way.
                  </p>
                  <p>
                    If you have any ranks in Sense Waveform, you can have fluent two-way communications with these
                    devices with a bandwidth similar to speaking to a person.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Nullify" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can prevent electromagnetism from propagating meaningful distances through the air in a region.
                </p>
              }
              ranks={[
                <>
                  <p>
                    Your Refract event now has a Goal called Destroy. You cannot use the Create and Destroy Goals in the
                    same event.
                  </p>
                  <p>
                    You can decrease the strength of an energy source affected by Refract, reducing it's Power level to
                    by the result of the Destroy Goal. At this rank, the power level cannot be reduced below 1.
                  </p>
                </>,
                <p>
                  You can quickly create an area of darkness without using the Refract event. As an exhale action, take
                  any number of points of Stress to Focus and an object you touch begins emitting a sphere of darkness
                  with a radius in meters and duration in minutes equal to this number. Light cannot enter, travel, or
                  be emitted inside this area and everyone inside is blind.
                </p>,
                <>
                  <p>
                    When you use the Destroy Goal of Refract, you can reduce the Power level of the energy source to 0,
                    completely eliminating it.
                  </p>
                  <p>
                    When you create an area of darkness as an exhale action, you can allow a single narrow wavelength to
                    pass and then sensitize your eyes to this wavelength. This allows you to see in the area when no one
                    else can. Radio signals, electrical wires, and any senses that involve electromagnetism in this area
                    only function if you allow them to.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Photonic Combat" isClassified>
            <SpecializationDescription
              intro={<p>Your ability you use electromagnetism as a weapon improves.</p>}
              ranks={[
                <p>
                  The limit on the amount of Stress your Refract events can do before they only inflict States is your
                  Electromagnetism rank plus your rank in this Specialization.
                </p>,
                <p>
                  If a target is already Off Balance or Suppressed when your Refract event would inflict the same state,
                  the event deals only Stress with no limit instead of this state.
                </p>,
                <p>
                  Your Refract events can have paralytic, disorienting, or burning effects as needed, therefore if it
                  harms someone it deals Stress to Near + a physical metabolism of your choosing.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sense Waveform" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can emit a tiny amount of light in obscure parts of the spectrum and interpret its reflections.
                </p>
              }
              ranks={[
                <p>
                  At any time, you can have perfect vision of regardless of the circumstances, even in absolute
                  darkness. This sense does not require your eyes and you cannot be blinded, even by their destruction.
                  You cannot be Suppressed by the Retract event or other dazzling light sources. You can see physical
                  space normally while you have the Out of Body or Sublimed states.
                </p>,
                <p>
                  You can interpret emissions of all parts of the spectrum. For example, sensing infrared can grant you
                  practical heat vision, or sensing radio and microwave emissions can be used to detect the strength and
                  origin of any broadcast.
                </p>,
                <p>
                  You can emit and sense tiny amount of x-rays and sub-millimeter waves, allowing you to see through
                  solid materials and examine their contents or internal structure.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />

      <Section header="Fight + Far">
        <p>
          Mastering this Entanglement lets you precisely target things in ranged combat, or even directly attack things
          with blasts of energy.
        </p>
        <EntanglementDescription
          physMet={<Metabolism fight />}
          hidMet={<Metabolism far />}
          esoStyle={"Evocation"}
          intStyle={"Sharp"}
        />
        <Break />
        <Section header="Sharp Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Fight + Far boosts your ranged combat abilities and
                capability to do harm with precise strikes.
              </p>
            }
            styleName="Sharp"
            rank1Bonus="You have the precision needed to engage in ranged combat in crowded spaces. You ignore partial cover that is caused by another person being in the path of the your attacks or by the target grappling."
            associatedAction="Ranged Attack actions"
          />

          <Section header="Charm Person" isInset>
            <SpecializationDescription
              intro={
                <p>
                  One of the earliest purposes the far edges of the hidden body first evolved to fulfill was a
                  rudimentary way to identify friends and foes within one's species. You can hijack this system in
                  humans for your own purposes.
                </p>
              }
              ranks={[
                <p>
                  Unless you actively offend or act hostile, you always make a great first impression, people are
                  inclined to trust you, be your friend, or look to your for leadership.
                </p>,
                <>
                  <p>
                    As an exhale action, you make make a Challenge using Fight + Far that triggers a Willpower reaction
                    in a target. If the target is experiencing strong emotions, such as open hostility, involving you,
                    they have advantage on the reaction. If you get more Progress on this Challenge than the reaction,
                    the target is charmed by you. They experience one of the following effects for the rest of the
                    scene, or until they are physically or socially harmed by you. If anything notably unusual happens
                    during this effect, the target knows they were manipulated by you in some way.
                  </p>
                  <p>
                    <strong>Friend:</strong> The target regards you as a close friend, and is as helpful and trusting as
                    one. They will not target you in combat.
                  </p>
                  <p>
                    <strong>Stranger:</strong> The target cannot recognize your face and does not believe they know you.
                  </p>
                  <p>
                    <strong>Enemy:</strong> The target views you with distrust and hostility. This alone is not enough
                    to escalate a conflict, but if combat occurs the target is Taunted by you.
                  </p>
                </>,
                <p>
                  You can target 2 people simultaneously when you attempt to charm. If you Challenge beats the sum of
                  both of their reactions, instead of having their opinion of you change, their opinion of each other
                  changes.
                </p>,
              ]}
            />
          </Section>
          <Section header="Dead Eye" isInset>
            <SpecializationDescription
              intro={<p>You can line up difficult shots to targets with extreme precision.</p>}
              ranks={[
                <p>
                  As long as you can see your target, an attack that you have Prepared using Aim remains Prepared until
                  you use it. If you use the Aim action on a target that you already have an attack Prepared for, you
                  gain Advantage on the Prepared attack.
                </p>,
                <p>Prepared attacks ignore the target's armor.</p>,
                <p>
                  If you have a weapon with a scope or laser sight or other aiming tools, you can continue using Aim
                  against a target even after you have a Prepared attack with Advantage. Each time you do, you can an an
                  additional Metabolism to the pairing used in the attack until all Metabolisms are involved.
                </p>,
              ]}
            />
          </Section>
          <Section header="Menace" isInset>
            <SpecializationDescription
              intro={
                <p>The threat of your weapons can control a situation socially just as well as it can physically.</p>
              }
              ranks={[
                <p>
                  When you use the Manipulate action, it can inflict Suppressed if you're wielding a ranged weapon or
                  Off Balance of you're wielding a Melee weapon. You can use Fight or Focus on Manipulate Challenges.
                </p>,
                <p>
                  Your attack actions have the added Goals Afraid and Taunt that inflict these states with an intensity
                  equal to the Progress applied to them, with a maximum of 1 or the size of your weapon.
                </p>,
                <p>
                  If you are wielding a weapon, the Manipulate action can target multiple enemies that can see it. Split
                  any Progress on the Manipulate challenge between all targets.
                </p>,
              ]}
            />
          </Section>
          <Section header="Pierce" isInset>
            <SpecializationDescription
              intro={<p>You can make the most from the trajectory of a single attack.</p>}
              ranks={[
                <p>When your attack is Prepared, resolve it as if any targets in cover did not have cover.</p>,
                <p>
                  When making a ranged attack, you may target a line starting at your space instead of a single target.
                  You may choose how to divide the Threat and any other Goals of this attack between a number of the
                  closest targets equal to your Sharp rank on this line.
                </p>,
                <p>
                  Enemies never have full cover against you, treat it as partial cover instead. As long as you know
                  their exact position, you can target them.
                </p>,
              ]}
            />
          </Section>
          <Section header="Stealth Strike" isInset>
            <SpecializationDescription
              intro={
                <p>
                  When your opponent is unable to properly defend against you, you can use the opening guide your strike
                  towards their weakest point.
                </p>
              }
              ranks={[
                <p>
                  In certain conditions you can do a Stealth Strike, a regular attack that deals an amount of extra
                  Threat equal to your Sharp rank. You can do this any time you are hidden from your target.
                </p>,
                <p>You can make a Stealth Strike any time your target is Off Balance. </p>,
                <p>
                  You can make a Stealth Strike against any target that has not yet acted in combat after determining
                  initiative.
                </p>,
              ]}
            />
          </Section>
          <Section header="Suppress Area" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can effectively threaten areas by making it clear to anyone that they will be punished for
                  entering the area.
                </p>
              }
              ranks={[
                <p>
                  When making a Ranged Attack action instead of picking a single target, you may target an area with any
                  radius in meters of up to your weapon's size. When you do this, you may only apply Progress to State
                  inflicting Goals like Suppressed, and not to the Threat Goal. Divide the result of all of the Goals
                  between everyone in the targeted area as you see fit.
                </p>,
                <p>
                  Any time someone currently Suppressed by one of your Ranged Attack ends a turn without at least
                  partial cover from you, you may deal Threat to them equal to the intensity of the Suppressed State.
                  They may react to this as a Ranged Attack and it consumes ammunition from your weapon.
                </p>,
                <p>
                  When targeting an area with a Ranged Attack instead of a single target, you may use the Threat Goal if
                  you are wielding an automatic weapon.
                </p>,
              ]}
            />
          </Section>
        </Section>

        <Break />

        <Section header="Evocation Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the Focus + Near entanglement increases the effectiveness and adds new
                capabilities to the Evoke cascade event.
              </p>
            }
            styleName="Evocation"
            rank1Bonus="You can induce the Evoke cascade event."
            associatedAction="inducing Evoke events"
          />
          <EventDescription
            eventName="Evoke"
            intro="You selectively sublime half of the virtual particles in a path creating a small but highly destructive burst of energy."
            linkTarget={linkMap.EvocationStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ fight: true, far: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Evocation Style"}
                  goals={["Power"]}
                />
                <p>
                  Inducing this is an a medium Risk and Effort Challenge that results in attacking a target you can see
                  with an explosive torrent of energy. The target is dealt Threat equal to Power and defends with a
                  Ranged Defense reaction.
                </p>
              </>
            }
          />

          <Section header="Annihilate" isClassified>
            <SpecializationDescription
              intro={<p>The raw destructive potential of Evoke increases.</p>}
              ranks={[
                <p>Your Evoke events deal an additional amount of Threat equal to your rank in this Specialization.</p>,
                <p>The Power metric of your Evoke event has no limit, you can spend any amount of Progress on it.</p>,
                <p>Your Evoke events deal an additional amount of Threat equal to your rank in Evocation.</p>,
              ]}
            />
          </Section>
          <Section header="Blast Radius" isClassified>
            <SpecializationDescription
              intro={<p>Your Evoke events can affect a larger area.</p>}
              ranks={[
                <p>
                  Your Evoke events have an additional Goal called Length. The event effects every space crossed by a
                  straight line with a length in meters equal to the Length result originating from your space. You may
                  divide the Threat dealt by this event between every person in the affected area as you see fit.
                </p>,
                <>
                  <p>
                    Your Evoke events have an additional Goal called Width. If both Length and Width are used, Width
                    indicates the total width of the affected area centered on a target line originating from your
                    space.
                  </p>
                  <p>
                    If only Width is used, and not Length, it indicates the Radius of a circle around a targeted point,
                    effectively doubling the width.
                  </p>
                  <p>
                    Similarly, if only Length is used, and not Width, the length of the line it indicates is now double
                    the amount of Progress used on the Goal.
                  </p>
                </>,
                <>
                  <p>
                    You can now choose to induce your Evoke events affecting an area at full power, causing them to deal
                    the full Threat to every person in the affected area, or to induce them carefully and divide the
                    Threat dealt between targets as you see fit.
                  </p>
                  <p>
                    Additionally, for events with a Length the affected area can begin anywhere on the line originating
                    from your space instead of beginning at your space.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Breach" isClassified>
            <SpecializationDescription
              intro={<p>Your Evoke events can blow doors off their hinges, destroy cover, and level walls.</p>}
              ranks={[
                <>
                  <p>
                    Your evocation events have an additional Goal called Breach. If this is the only Goal you apply
                    Progress to, you can induce the event as an inhale action or as an instant non-action that occurs
                    when you determine initiative. Any solid barrier, such as a wall or door, affected by the event with
                    a durability on the following list that is less than the Progress applied to this Goal is
                    explosively destroyed.
                  </p>
                  <ul>
                    <li>1: Thin glass</li>
                    <li>2: Small furniture</li>
                    <li>3: Hollow wooden doors</li>
                    <li>3-6: Drywall, solid wood doors</li>
                    <li>6-9: Steel doors </li>
                    <li>9-15: Brick wall</li>
                    <li>15+: One meter thick reinforced concrete</li>
                  </ul>
                </>,
                <p>Breach destroys barriers so thoroughly that anyone that had cover behind it no longer does. </p>,
                <p>
                  Breach destroys barriers with such explosive violence that anyone behind the barrier within a meter of
                  the destroyed area is Off balance with an Intensity equal to the amount of extra Progress above what
                  was needed to destroy the barrier, with a minimum of 1.
                </p>,
              ]}
            />
          </Section>
          <Section header="Burnout" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  The human body wasn't meant to channel this degree of energy. You can push beyond this limit, harming
                  yourself in the process in order to remove all limits on the power of evocation.
                </p>
              }
              ranks={[
                <p>
                  When inducing Evoke, you can Push Yourself an additional number of times equal to your Evocation rank
                  instead of just once.
                </p>,
                <p>
                  Every point of Stress you take from Pushing Yourself while inducing Evoke increases the allocation
                  bonus of the event by 1.
                </p>,
                <p>
                  When inducing Evoke, you can willingly reduce a Metabolism capacity to 0 by Pushing Yourself, causing
                  injury or dissociation. If this happens, add the damaged Metabolism's score to the final amount of
                  Progress created.
                </p>,
              ]}
            />
          </Section>
          <Section header="Contained Plasma" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can compress the volatile energies from evocation effects inside physical objects to release later
                  a single detonation or a sustained release from the business end of a weapon.
                </p>
              }
              ranks={[
                <p>
                  When inducing Evoke, you may hold a small object, such as a coin, card, bullet, or stone, in the palm
                  of your hand to charge it with the event instead of detonating the event immediately. The object
                  begins to glow brightly and as long as it, or any container it is in, remain in your line of sight you
                  can detonate it at any later time in the scene. Detonating the object is an inhale action that causes
                  the Evoke event you previously induced to resolve at the object's location, dealing Threat to anyone
                  occupying the same space as the object or according to any area of effect Goals used. You may only
                  maintain a single object in this state at a time.
                </p>,
                <p>
                  You can contain the energies from evocation in an object and release them at a controlled rate. As an
                  inhale action, touch a melee weapon, a piece cloth used as a hand wrap, a handful of projectiles, a
                  magazine of ammunition, or other similar objects that could impact a target during a melee, ranged, or
                  unarmed attack action. This object develops a luminous corona of plasma discharge, and has the
                  allocation bonus of any attack made with it increased by your Evocation rank. The object can directly
                  harm entities in hidden space if it strikes them. This state lasts until the scene ends or you lose
                  line of sight to the object or a person holding the object. You can maintain a number of objects in
                  this state equal to your evocation rank.
                </p>,
                <>
                  <p>
                    As an inhale action, you can create from nothing weapons made of luminous plasma. This acts as a
                    long lasting bladed weapon of any size or as a stack of six size 1 thrown weapons that are destroyed
                    on impact. Attacks made with these weapons have an allocation bonus increased by your Evocation rank
                    and can harm entities in hidden space. You can only do this once per scene and the weapons created
                    can only be used by you.
                  </p>
                  <p>
                    Additionally, when you induce Evoke into an object, you may decide if the object leaving your line
                    of sight will cause it to become inert or immediately detonate it. If the object detonates inside of
                    someone's body, pockets, or a bag they carry, they have disadvantage on the defense reaction to the
                    detonation.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Disentangle" isClassified>
            <SpecializationDescription
              intro={<p>You can assault a target's connection to their hidden body directly.</p>}
              ranks={[
                <>
                  <p>Your Evoke events can target entities in hidden space if you are aware of their presence. </p>
                  <p>
                    Additionally, when Evoke has a single target, you may execute it as an intangible purely
                    dissociative attack. When you do, the target makes a Willpower reaction instead of Ranged Defense,
                    and all Stress must be allocated to their Hidden Metabolisms. At this rank, this attack cannot cause
                    a Dissociative State. If it would reduce a Capacity to 0, it instead remains at 1 and any excess
                    Stress must be applied to another Hidden Metabolism.
                  </p>
                </>,
                <p>
                  If a target forced to make a Willpower reaction by your Evoke event is not entangled and therefore has
                  no Hidden Metabolism scores, they are immediately rendered unconscious until the end of the scene.
                </p>,
                <p>
                  Targets forced to make a Willpower reaction by your Evoke event that cannot take any further Stress
                  without dissociating, you choose if they fall immediately unconscious for a number of rounds equal to
                  the Stress dealt or they gain dissociative states normally.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />
      <Section header="Flight + Self">
        <p>
          This entanglement helps one defend them self from unarmed blows, reduce damage taken in general, improve
          endurance, and even to protect oneself and others by creating barriers of force.
        </p>
        <EntanglementDescription
          physMet={<Metabolism flight />}
          hidMet={<Metabolism self />}
          esoStyle={"Abjuration"}
          intStyle={"Tough"}
        />

        <Break />
        <Section header="Tough Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Flight + Self boosts your endurance, staying power, and
                unarmed defense.
              </p>
            }
            styleName="Tough"
            rank1Bonus="You recover quickly instead of facing the long term consequences of injury. When you recover Stress at the start of each day, you completely recover all Stress. Additionally, you no longer require medical care to recover from the Dying state and lose this state any time a scene ends."
            associatedAction="Unarmed Defense reactions"
          />
          <Section header="Diehard" isInset>
            <SpecializationDescription
              intro={<p>It is extremely hard to take you out of a fight.</p>}
              ranks={[
                <p>
                  Any time you are dealt more than 1 point of Stress by an attack, reduce the amount of Stress by your
                  Tough style rank down to a minimum of 1 stress.
                </p>,
                <p>
                  When one of your Physical Metabolism capacities is reduced to 0, you do not gain the injury State that
                  this normally causes and may continue acting normally. You only gain the injury State if this
                  Metabolism would take further Stress at a later point while its capacity is still 0.
                </p>,
                <p>
                  When one of your Physical Metabolisms is injured, your Hidden Metabolisms all refill to their
                  capacity.
                </p>,
              ]}
            />
          </Section>
          <Section header="Extropy" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You unconsciously use the cascade effect to create the energy and materials your body needs to
                  maintain your health.
                </p>
              }
              ranks={[
                <p>
                  You no longer require food or water to remain healthy and comfortable. Your age at half speed,
                  doubling your lifespan.
                </p>,
                <p>
                  You no longer require breathing oxygen to remain healthy and comfortable. Your requirement for sleep
                  to be fully rested and restore Stress reduced by half.
                </p>,
                <p>
                  You no longer require flowing blood to remain healthy, and are therefore cannot gain the Dying state.
                  Only injuring all three of your Physical Metabolisms can kill you. You no longer age and can live
                  forever if not killed.
                </p>,
              ]}
            />
          </Section>
          <Section header="Homeostasis" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Your body maintains optimum functionality, resisting and quickly recovering from anything that would
                  throw you off balance.
                </p>
              }
              ranks={[
                <p>
                  Any time a state is applied to you, you may choose to reduce the intensity of the state by your Tough
                  style rank, to a minimum of 1.
                </p>,
                <p>You are immune to any undesired poison, toxin, disease, or drug.</p>,
                <p>When you use the rest action in combat, reduce the intensity of all states instead of just one. </p>,
              ]}
            />
          </Section>
          <Section header="Regneration" isInset>
            <SpecializationDescription
              intro={
                <p>
                  By subliming clotting factors, platelets, and blood transfusions into your hidden body, you can
                  transfuse them into your physical body to seal your wounds rapidly.
                </p>
              }
              ranks={[
                <p>Remove 1 point of Stress from every Physical Metabolism after every scene.</p>,
                <p>Remove 1 point of Stress from every Physical Metabolism every minute.</p>,
                <p>You can regrow a missing limb or organ by getting enough sleep to rest for the day.</p>,
              ]}
            />
          </Section>
          <Section header="Stamina" isInset>
            <SpecializationDescription
              intro={<p>You can exert yourself for much longer durations than the body is normally capable.</p>}
              ranks={[
                <p>
                  When you regenerate half of your spent Metabolism points between combat rounds, you regain an
                  additional number of points equal to your Tough style rank
                </p>,
                <>
                  <p>Any challenge that would be high Effort due to physical exertion is instead medium Effort. </p>
                  <p>
                    Additionally, you can continue any physical activity indefinitely. The only limit is your need for
                    sleep.
                  </p>
                </>,
                <p>When you use the rest action in combat, refill all Metabolisms instead of one.</p>,
              ]}
            />
          </Section>
          <Section header="Unyielding" isInset>
            <SpecializationDescription
              intro={<p>It's extremely hard to knock you off your feet or push you around.</p>}
              ranks={[
                <p>
                  When you stand your ground by not using the free movement provided by a defense Reaction, you can use
                  Unarmed Defense in place of this and any subsequent reactions until your next turn.
                </p>,
                <>
                  <p>You cannot be forced to move, such as by someone inflicting the Grappled state on you.</p>
                  <p>
                    An attack cannot take you off your feet unwillingly, therefore attacks cannot raise the intensity of
                    your Off Balance state above 3.
                  </p>
                </>,
                <p>
                  When someone inflicts the Grappled state on you, you may also inflict it on them with the same
                  intensity.
                </p>,
              ]}
            />
          </Section>
        </Section>
        <Break />

        <Section header="Abjuration Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the entanglement of Flight + Self allows you to heighten and customize the
                capabilities of the Ward cascade event.
              </p>
            }
            styleName="Abjuration"
            rank1Bonus="You can induce the Ward cascade event."
            associatedAction="inducing Ward events"
          />
          <EventDescription
            eventName="Ward"
            intro="You create a translucent barrier of force that prevents anything from crossing it."
            linkTarget={linkMap.AbjurationStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ flight: true, self: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Abjuration Style"}
                  goals={["Durability", "Length"]}
                />
                <p>
                  Choose a straight line starting from a point in any adjacent space and ending at any point within a
                  number of meters equal to the Length. For the rest of the scene, or until you dismiss it, or lose
                  consciousness, a barrier prevents anything from crossing this line. If this line crosses any occupied
                  spaces, you choose which side of the barrier each occupier is on. Attacks that target the barrier, or
                  anything on the other side of it, deal Threat only to the barrier. Each point of Threat reduces the
                  barrier's Durability by 1, until it reaches 0 and is destroyed. The attack that destroys the barrier
                  is still blocked completely, regardless of how much Threat it dealt.
                </p>
                <p>
                  These barriers completely block things in hidden space just as well as they block physical objects.
                </p>
                <p>You can only have one Ward barrier active at a time.</p>
                <p>
                  You have some control over the cosmetic appearance of your barriers. However, they are always
                  transparent enough not to hinder vision yet still easily visible due to a faint color or luminosity.
                </p>
              </>
            }
          />

          <Section header="Filter" isClassified>
            <SpecializationDescription
              intro={<p>When using the Ward event you may add filtering properties to the barrier you create.</p>}
              ranks={[
                <>
                  <p>
                    When inducing Ward, you may reduce its Durability by 1 to add a filter to it. You may do this
                    multiple times as long as you maintain at least 1 point of Durability. For each filter you add,
                    choose a single object or entity. The chosen targets are either the only thing the barrier blocks,
                    or the only thing that the barrier allows to pass. Things that can pass through the filter can only
                    do so while moving at speeds slower than 1 meter per round, preventing any attacks from passing
                    through.
                  </p>
                  <p>
                    Filters cannot cause Threat or other harmful effects. If a blocked object is inside an object that
                    can pass, then both objects are blocked.
                  </p>
                </>,

                <p>
                  The targets of filters can now be a specific class of objects, type of entity, or homogeneous
                  substance. For example, you could make selections such as metallic objects, humans, or oxygen. Blocked
                  objects inside allowed objects can now harmlessly pass through each other to fulfill the filter if you
                  want them to. For example, you could create a filter that blocks a toxin but allows humans in order to
                  safely purge the toxin from those that cross the barrier.
                </p>,
                <p>
                  You can now add filters that work on a case by case basis. When you do, you become aware of anything
                  that comes within a meter of the barrier no matter where you are, and may then choose whether to allow
                  it or block it. If it returns later, you may change your previous choice, allowing you to trap
                  something.
                </p>,
              ]}
            />
          </Section>
          <Section header="Repelling Sphere" isClassified>
            <SpecializationDescription
              intro={<p>You can create airtight Wards that push others away.</p>}
              ranks={[
                <p>
                  Instead of straight lines, you may create spherical wards centered on yourself with a diameter of up
                  to Length. The affected area must not include anything unwilling to be enclosed by it, or the event
                  fails. The sphere may be airtight if you wish, preventing liquids or gasses from entering or exiting.
                </p>,
                <p>
                  When you create a spherical Ward, it can now include unwilling occupants and you can now place it
                  freely as long as you are inside or adjacent to it. You may also select any number of entities or
                  objects that are expelled from the warded area. These targets are forcibly pushed into the nearest
                  empty space of their choice outside of the sphere.
                </p>,
                <p>
                  If the ward is centered on you when you create it, you can choose for it to move with you when you
                  move or remain stationary. If your movement causes the ward to move into occupied spaces, the occupant
                  is pushed to the nearest space of their choosing outside the path of the ward. Collisions with
                  unmovable objects prevent your movement. Each person, or object with similar mass to a person, forced
                  to move by the ward moving reduces its remaining durability by 1
                </p>,
              ]}
            />
          </Section>
          <Section header="Reflexive Shield" isClassified>
            <SpecializationDescription
              intro={<p>You can instinctively protect yourself from incoming attacks by inducing Ward. </p>}
              ranks={[
                <p>
                  You may induce Ward as a defense reaction to any incoming attack. This reaction uses same metabolism
                  pair and allocation bonus as inducing Ward normally, but can only use the a single Goal called
                  Defense. This Goal has no limit to the Progress you can apply to it and it works the same as the
                  Defense Goal of any defense reaction, with each point applied to it reducing Threat and or other Goals
                  dealt by 1.
                </p>,
                <p>
                  When using Ward as a reaction, it emits a repulsive field. Adjacent attackers are repelled by it and
                  become Off Balance 1. Similarly, attacks originating from further away have their momentum drained by
                  it, removing an amount of Threat dealt equal to the weapon size.
                </p>,
                <p>
                  When using Ward as a reaction, if the amount of Defense is more than enough to completely nullify the
                  incoming attack, the event also creates a lasting barrier as if you induced the event normally. The
                  barrier is 1 meter long, oriented in such a way that it blocks you from the attacker, and has
                  Durability equal to the extra amount of Defense above what was needed to nullify the attack.
                </p>,
              ]}
            />
          </Section>
          <Section header="Subtle Ward" isClassified>
            <SpecializationDescription
              intro={<p>Your Wards can be effective without people even being aware of them.</p>}
              ranks={[
                <p>
                  You can choose if each Ward you make is opaque, translucent, or invisible. If an invisible ward has
                  filters added to it by the Filter specialization, unblocked targets can pass through at any speed and
                  doing so is imperceptible to them.
                </p>,
                <p>
                  You can induce Ward without any gestures or noticeable exertion, preventing witnesses from knowing you
                  did anything. You may also make wards that exclusively act in hidden space while being imperceptible
                  in physical space, or vice versa.
                </p>,
                <p>
                  You may induce an alternate version of Ward that acts primarily mentally. When you do, the ward does
                  not actually physically block anything. Instead, anyone that comes within Length of any point of the
                  ward becomes stricken with an inexplicable anxiety and fear of approaching closer, even if they can't
                  actually perceive the it. I'm order to come closer to the ward or traverse it someone must make a
                  Willpower reaction that is greater than the Durability of the Ward.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sustain Ward" isClassified>
            <SpecializationDescription
              intro={<p>Your Ward events last longer and are more durable.</p>}
              ranks={[
                <p>Your wards last until you sleep, lose consciousness, or dismiss them.</p>,
                <p>
                  You can extend the Durability or Length of a barrier by inducing Ward again. However doing so causes a
                  point of Stress to both Flight and Self. You cannot recover this Stress while the ward remains active.
                </p>,
                <p>
                  Your wards can continue existing while you sleep. For each hour that passes while you are not
                  conscious, they lose a point of durability.
                </p>,
              ]}
            />
          </Section>
          <Section header="Tactical Shielding" isClassified>
            <SpecializationDescription
              intro={<p>You use sculpt Wards tactically and selectively to protect you or your allies.</p>}
              ranks={[
                <p>
                  Your Wards do not need to be a straight line, and can follow any path you choose of the same length.
                  You can freely traverse and attack through any ward you have created.
                </p>,
                <p>
                  Your wards are selective, it blocks attacks from your enemies but does not block attacks made by your
                  allies. Despite this, your wards remain non-traversable to anyone but you.
                </p>,
                <p>
                  When inducing Ward, you may make a barrier normally or instead take a point of Stress to Focus to wrap
                  allies in a subtly shimmering protective field that clings to their body. When you do this, choose a
                  path according to the Length Goal as normal. Divide the Durability Goal up as you see fit between
                  anyone within a meter of this path. The amount of Durability you assign each person determines the
                  durability of their shield. Any Threat dealt to them is taken by their shield instead of them. Each
                  shield dissipates after it absorbs an amount of Threat equal to the Durability assigned to it. to
                  induce the event. Any further Threat then passes through normally.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />
      <Section header="Flight + Near">
        <p>
          Mastering this Entanglement is mastering motion itself. It boosts your melee defense, speed, and can even
          allow you to move things with your mind.
        </p>
        <EntanglementDescription
          physMet={<Metabolism flight />}
          hidMet={<Metabolism near />}
          esoStyle={"Gravitonertia"}
          intStyle={"Mobile"}
        />

        <Break />
        <Section header="Mobile Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Flight + Near your skill with melee defense and rapid
                mobility.
              </p>
            }
            styleName="Mobile"
            rank1Bonus="Your mobility allows you to control how you engage in melee combat and traverse any obstacle. Obstacles than can be traversed by parkour, climbing, balancing, swimming, or tumbling cannot increase the Risk level or add additional goals to our Move actions, however they remain difficult terrain."
            associatedAction="Melee Defense reactions"
          />
          <Section header="Afterimage" isInset>
            <SpecializationDescription
              intro={<p>Enemies target where you were instead of where you are.</p>}
              ranks={[
                <p>
                  When an adjacent ally is attacked, you can also take a defense reaction. If either of you still have
                  free movement from defense reactions available, one of you can use it to swap spaces before the
                  attack. If you do this, any Threat or States dealt by the attack are divided evenly between you and
                  your ally.
                </p>,
                <p>
                  When reacting to being attacked, you may use the the reaction's free movement to swap positions with a
                  different enemy who is adjacent to you. Any Threat or States dealt by the attack are then divided
                  evenly between you and this enemy.
                </p>,
                <p>
                  When you take a Move action, you blur to your next location. You may leave behind an afterimage in a
                  space on the trajectory you traveled. If this image is adjacent to an enemy, any Threat or States
                  dealt by the attack are then divided evenly between you and this enemy.
                </p>,
              ]}
            />
          </Section>
          <Section header="Charge" isInset>
            <SpecializationDescription
              intro={<p>You can effectively apply your momentum in combat to your attacks and defenses.</p>}
              ranks={[
                <p>
                  When you use the free movement provided by a melee or unarmed attack to approach the target before the
                  attack, increase the amount of free movement you can take by your Mobile rank. All of this movement
                  must be used to move directly towards the target.
                </p>,
                <p>
                  When you use the free movement provided by a melee or unarmed attack to approach the target before the
                  attack, you can pass through enemy occupied spaces and ignore any difficult terrain.
                </p>,
                <p>
                  When you charge an enemy by using your inhale action to Move in a straight line to a target and then
                  strike it with a Melee or Unarmed Attack, you can move faster than the eye can follow. The attack and
                  the next attack targeting you before your next turn are treated as if you are Hidden.
                </p>,
              ]}
            />
          </Section>
          <Section header="Evasion" isInset>
            <SpecializationDescription
              intro={<p>Your rapid movements make you a hard target.</p>}
              ranks={[
                <p>When reacting to an attack, if you reduce the threat dealt to 1, it is instead reduced to 0.</p>,
                <p>
                  If you use the Move action to move more than 3 meters, your quick movement makes you hard to hit, and
                  the next defense Reaction you take becomes Prepared.
                </p>,
                <p>
                  If you use a deep breath to Move and then Elude and do nothing else on your turn, you become an
                  extremely hard target. The first attack targeting you after this is nullified completely, on the
                  second your defense reaction is Prepared.
                </p>,
              ]}
            />
          </Section>
          <Section header="Speed" isInset>
            <SpecializationDescription
              intro={<p>You can run much faster than before.</p>}
              ranks={[
                <p>
                  When you use an inhale action, you can move 1 meter for free before AND after the action, instead of
                  just one or the other.
                </p>,
                <p>Your Move action is always Prepared.</p>,
                <p>Your Move action has a Progress bonus equal to your Mobile style rank.</p>,
              ]}
            />
          </Section>
          <Section header="Traversal" isInset>
            <SpecializationDescription
              intro={<p>Obstacles and terrain no longer hinder your movement.</p>}
              ranks={[
                <p>
                  Reduce the difficulty of all terrain by your Mobile style rank, down to a minimum of being normal
                  terrain.
                </p>,
                <p>You can freely pass through enemy spaces, but you cannot end an action in them.</p>,
                <p>
                  When you use the Move action, you can combine horizontal wall running and rapid vertical climbing to
                  traverse vertical surfaces as if they were normal terrain up to a height equal to your Near score in
                  meters. You must end the action on flat terrain.
                </p>,
              ]}
            />
          </Section>
          <Section header="Unfettered" isInset>
            <SpecializationDescription
              intro={<p>You can always get back on your feet or slip out of any tough situation effortlessly.</p>}
              ranks={[
                <p>When your turn starts, remove the Off Balance state entirely.</p>,
                <p>You can slip through an enemy's defenses, your movement never triggers Counterattack reactions.</p>,
                <p>
                  As an inhale action you can slip out of any hold, removing the Grappled state entirely, or instantly
                  escape handcuffs, zip ties, ropes, or other restraints.
                </p>,
              ]}
            />
          </Section>
        </Section>
        <Break />
        <Section header="Gravitonertia Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the entanglement of Flight + Near allows you to control the fundamental forces
                behind gravity and motion. This ability is expressed primarily via the Telekinesis cascade event.
              </p>
            }
            styleName="Gravitonertia"
            rank1Bonus="You can induce the Telekinesis cascade event."
            associatedAction="inducing Telekinesis events"
          />
          <EventDescription
            eventName="Telekinesis"
            intro="You focus your mind on an object, causing it to move on command."
            linkTarget={linkMap.AbjurationStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ flight: true, near: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Gravitonertia Style"}
                  goals={["Mass", "Range"]}
                />
                <p>
                  Choose a loose non-living object you can see within a number of meters equal to Range. The object must
                  weigh fewer kilograms than Mass. This object quickly floats to a new location within Range of its
                  starting point.
                </p>
              </>
            }
          />
          <Section header="Alter Mass" isClassified>
            <SpecializationDescription
              intro={<p>Your can increase or decrease the mass of objects and use Telekinesis on larger things. </p>}
              ranks={[
                <p>
                  Each of Progress applied to the Mass Goal of your Telekinesis events now allows you to move 10
                  kilograms instead of 1.
                </p>,
                <p>
                  As an inhale action, you can touch an object and take a point of Stress to Flight or Near to change
                  its weight. It doubles or reduces to half if you Stress one metabolism. If you take Stress to both, it
                  increases 10x or reduces to 10% its original weight. This change lasts until the end of the scene or
                  until you dismiss it as an inhale action. At this rank, you cannot use telekinesis on this object
                  while it is modified.
                </p>,
                <p>
                  When inducing Telekinesis, you can now modify the weight of the target object as described in rank 2
                  just before you move it without an additional action. If the new weight is now under the weight
                  indicated by the Mass Goal, you can move the object.
                </p>,
              ]}
            />
          </Section>
          <Section header="Force Push" isClassified>
            <SpecializationDescription
              intro={<p>You can shove or restrain other people telekinetically.</p>}
              ranks={[
                <p>
                  You can induce Telekinesis to shove or restrain a person within Range. The target gains the Grappled
                  or Off Balance state with intensity equal to Mass. Grappled enemies do not lose this state if they are
                  forced to move, but you cannot force them to move by moving yourself.
                </p>,
                <p>
                  When you shove a person, in addition to gaining Off Balance they are move directly away from you a
                  number of meters equal to your Gravitonertia rank. If this enemy currently has the Grappled state from
                  a previous Telekinesis induction, you may move them in any direction.
                </p>,
                <>
                  <p>
                    You may target an empty location within Range with a Telekinesis shove. If you do this, every person
                    within a meter of the location is pushed directly away from the target a number of meters equal to
                    your Gravitonertia rank and given Off Balance equal to Mass.
                  </p>
                  <p>
                    Any time an enemy shoved by Telekinesis collides with another enemy or an immovable object, they are
                    dealt Threat equal to the Mass Goal and may make a Melee Defense reaction.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Kinetic Attack" isClassified>
            <SpecializationDescription
              intro={<p>You can telekinetically throw small objects with bullet-like force.</p>}
              ranks={[
                <p>
                  You can induce Telekinesis as an attack to violently launch a tiny object with bullet-like force from
                  your hand or the nearby environment. When you do so, the Mass Goal measures the amount of Threat this
                  projectile deals instead of the weight limit. One target within the Range Goal is dealt this amount of
                  Threat. Any other Goals and capabilities of Telekinesis are not available when it is used as an
                  attack.
                </p>,
                <p>
                  You can accelerate objects enough to push them further. Any Progress assigned to the Range Goal
                  increases the final Range you can use by 2 meters instead of 1.
                </p>,
                <p>
                  When you induce Telekinesis as an attack, add your Gravitonertia style rank to the final amount of
                  Threat dealt by the attack.
                </p>,
              ]}
            />
          </Section>
          <Section header="Levitation" isClassified>
            <SpecializationDescription
              intro={<p>You can lift yourself or others off the ground with your mind.</p>}
              ranks={[
                <p>
                  You can choose to target yourself with Telekinesis instead of an object in order to levitate. When you
                  do, you rise off the ground by Range and stay there for a minute, at which point they harmlessly
                  descend. The Mass Goal and any other Goals or effects cannot be used when you induce the event this
                  way. As an inhale action, you may ascend or descend the same distance again. Other than ascending or
                  descending, you cannot move while in the air unless you are next to a surface you can push yourself
                  along on, such as a ceiling or wall. Moving this way requires the Move action, but each meter moved
                  has a terrain Difficulty of 2.
                </p>,
                <p>
                  You can choose to target another person within Range of Telekinesis to levitate them in the same way
                  you levitate yourself. You can move the target up or down by Range again as an inhale action. If the
                  target is unwilling to be moved, they can make a Willpower reaction when inducing the event. If the
                  total amount of Progress used to induce the event beats their reaction, they begin to levitate. You
                  can apply Progress to the Mass Goal to increase this difficulty, but it has no other effect.
                </p>,
                <>
                  <p>
                    When you move yourself or a levitated target further as an inhale action, you may also move it
                    horizontally the same distance.
                  </p>
                  <p>
                    Additionally, any time you would be harmed by a fall you can instinctively levitate just enough to
                    avoid harm.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Redirect" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can instinctively bend the path of moving objects to defend yourself or send projectiles back at
                  attackers.
                </p>
              }
              ranks={[
                <p>
                  You can induce Telekinesis as a defense reaction to being attacked. If you do so, the event only has a
                  single Defense Goal that has no limit to the Progress that can be applied to it. The result of Defense
                  works the same as any other defense reaction, reducing the Threat or states caused by the attack.
                </p>,
                <p>
                  When using Telekinesis as a defense reaction to a ranged attack, if the result of the Defense Goal is
                  more than enough to completely nullify the attack, then the projectile is redirected back to it's
                  origin. The attacker is dealt an amount of Threat equal to the extra amount of Defense above what was
                  needed to nullify the attack. If you also have ranks in Kinetic Attack, you can accelerate the
                  projectile further and add your Gravitonertia rank to the amount of Threat dealt.
                </p>,
                <p>
                  You can induce Telekinesis targeting a moving object within Range in order to change the direction of
                  the movement by up to 90 degrees. If you only redirect an object this way instead of fully controlling
                  its movement, the maximum amount of weight of the affected object is multiplied by 10 from what Mass
                  would normally indicate.
                </p>,
              ]}
            />
          </Section>
          <Section header="Remote Interaction" isClassified>
            <SpecializationDescription
              intro={<p>You can telekinetically interact with objects and enemies as if they were within reach.</p>}
              ranks={[
                <p>
                  The Interact action no longer requires a free hand and you can use it on any object weighing under 1
                  kilogram within a number of meters equal to your Near score without actually touching the object.
                </p>,
                <p>
                  You can use the Improvise action on any target within a number of meters equal to your Near score, as
                  long as there is something you could move telekinetically that could plausibly grant an Advantage or
                  Disadvantage.
                </p>,
                <>
                  <p>Using Interact or Improvise at range is subtle and cannot be traced back to you by witnesses. </p>
                  <p>
                    You can induce Telekinesis targeting an enemy within Range to attempt to disarm them. The target
                    must make a Melee Defense reaction. If the total amount of Progress used to induce the event beats
                    their reaction, the weapon falls to the floor. If it beats their reaction plus the size of the
                    weapon, it flies into your hand or to the floor at your feet.
                  </p>
                </>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />
      <Section header="Flight + Far">
        <p>
          Mastering this Entanglement grants one lightning fast wits, reflexes and predictive power, or the ability to
          create areas that deny others these faculties.
        </p>

        <EntanglementDescription
          physMet={<Metabolism flight />}
          hidMet={<Metabolism far />}
          esoStyle={"Pneumaplegia"}
          intStyle={"Quick"}
        />
        <Break />
        <Section header="Quick Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Flight + Far focuses on accelerating your wits and predictive
                capabilities.
              </p>
            }
            styleName="Quick"
            rank1Bonus="You reflexively sense and respond to inbound dangers before they happen, making you less dependent on cover to survive a firefight. When you use the free movement from a defense reaction, the attack that triggered this reaction is treated as if you had partial cover. "
            associatedAction="Ranged Defense reactions"
          />
          <Section header="Control Probability" isInset>
            <SpecializationDescription
              intro={<p>You can sense and eventually control the results of random chance. </p>}
              ranks={[
                <p>
                  You can accurately predict the results of any isolated random event, such as a dice roll or card pull,
                  as long as you can see the event and it is not involved in a Challenge.
                </p>,
                <p>
                  In combat, you can use the Improvise action to influence the odds of expected action you can see, even
                  if there is no way you could plausibly influence it. When you use Improvise this way, instead of
                  causing advantage or disadvantage you instead can only increase or decrease the Risk level once.
                </p>,
                <p>
                  You can control the results of any isolated random event, such as a dice roll or card pull, as long as
                  you can see the event and it is not involved in a Challenge.
                </p>,
              ]}
            />
          </Section>
          <Section header="Danger Sense" isInset>
            <SpecializationDescription
              intro={<p>You can sense and predict incoming threats.</p>}
              ranks={[
                <p>
                  You can accurately predict when an attack won't meaningfully harm you, allowing you to not waste
                  effort avoiding it. If an attack would deal less Threat to you than your Quick style rank, it instead
                  harmlessly misses you without triggering a reaction.
                </p>,
                <>
                  <p>
                    You can tell when incoming fire is merely a threat and when it is actually meant for you. You are
                    immune to the Suppressed state.
                  </p>
                  <p>
                    Additionally, you are never surprised and can act normally when ambushed. Enemies with the Hidden
                    state do not have Advantage when attacking you.
                  </p>
                </>,
                <p>
                  When using the free movement provided by your first reaction in a round, you may make this move just
                  before the attack instead of simultaneously, causing it to hit your original location instead of you.
                  The attack is completely nullified without you needing to spend any metabolism points.
                </p>,
              ]}
            />
          </Section>
          <Section header="Multitask" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can process different tasks in your physical brain and in your hidden body separately, allowing
                  you to effectively parallelize tasks.
                </p>
              }
              ranks={[
                <>
                  <p>
                    You can focus on multiple tasks at one time. The exact limits of this are up to the GM, but it
                    includes making multiple Challenges simultaneously, doing unrelated physical tasks with both hands,
                    or participating in combat while solving another problem.
                  </p>
                  <p>
                    Additionally, if you have a free hand when you take an inhale action, you may take the Interact
                    action for free to do something that could be done with one hand.
                  </p>
                </>,
                <p>
                  You can keep a mental process active in the back of your mind. Your Prepared actions or Challenges do
                  not expire until the end of a scene and you can have multiple things Prepared at the same time.
                </p>,
                <p>
                  If you have a weapon in each hand, you can use one to defend yourself and one to attack. As a single
                  inhale action, you can Prepare both an attack and a defense reaction.
                </p>,
              ]}
            />
          </Section>
          <Section header="Precognition" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Your predictive abilities are so rapid and accurate that it seems like you can see the near future.
                </p>
              }
              ranks={[
                <p>
                  As an inhale action, you can designate an enemy to focus your predictive skills on. The GM must tell
                  what this target will do during their next turn. This information is accurate as long as the situation
                  doesn't radically change. Your Reactions to any attack this target makes before your next turn have
                  Advantage.
                </p>,
                <p>
                  Once per scene, you can declare that you are acting on a prediction without specifying exactly what
                  you are doing. This takes at least a few minutes. At any later point, you can retroactively declare
                  what it is you did in this moment. The action you took could be anything you could have plausibly done
                  with the time, freedom of movement, and social context you had available when you first made the
                  prediction. Your action can include changing locations or acquiring any small available item that you
                  have secretly been carrying since then if this is plausible. You cannot make another prediction until
                  you have resolved The previous one.
                </p>,
                <p>
                  Outside of combat, you have a sense of what might happen in the next few minutes. Once per scene, you
                  can ask the GM for information on what is about to happen. How much information you are given is up to
                  the GM, but the information is accurate until the circumstances change significantly.
                </p>,
              ]}
            />
          </Section>
          <Section header="Priority" isInset>
            <SpecializationDescription
              intro={<p>Your can always choose the ideal moment to act in combat.</p>}
              ranks={[
                <p>
                  When combat starts, you may choose to have a secondary turn. Make two separate challenges to determine
                  the place of your two turns in the initiative order. The turn that occurs later in the order is the
                  secondary turn. The secondary turn does not trigger anything that would normally happen at the start
                  of your turn. During the secondary turn, you can only take one basic action.
                </p>,
                <p>
                  When determining the initiative order of your two turns, you may determine your primary turn's place
                  normally and then decide when the secondary turn occurs after seeing everyone else's turn order. The
                  secondary turn can be used to take a single basic or attack action.
                </p>,
                <p>
                  Determining initiative does not require a Challenge for you. Decide when your primary and secondary
                  turns occur after the rest of initiative is determined.
                </p>,
              ]}
            />
          </Section>
          <Section header="Tactician" isInset>
            <SpecializationDescription
              intro={<p>You have a strong sense for in the moment tactics and can lead your squad by example. </p>}
              ranks={[
                <p>
                  The first time you take the Move action in a round, any ally who can see our hear you can also move a
                  number of meters equal to your Quick style rank.
                </p>,
                <p>
                  When an ally you can see is attacked, you can warn them at the last second if they can hear or see
                  you. You can allocate your Far metabolism to the ally's reaction along with any metabolism points they
                  allocate. If you have a defense reaction Prepared you may also allocate Focus. Any Stress taken must
                  be taken by the target of the attack.
                </p>,
                <p>
                  When you use the Aim action, another ally who can see or hear you can Prepare an attack as well.
                  Similarly, if you use Elude, an ally who can see or hear you can Prepare a defense reaction.
                </p>,
              ]}
            />
          </Section>
        </Section>
        <Break />
        <Section header="Pneumaplegia Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the Flight + Far Entanglement is the discipline of “frozen breath” allowing you to
                create areas with a distorted connection between hidden and physical space. You can utilize the
                dissociating effects of this to disorient others and modify the perception of time so that space itself
                seems to thicken.
              </p>
            }
            styleName="Pneumaplegia"
            rank1Bonus="You can induce the Distort cascade event."
            associatedAction="inducing Distort events"
          />
          <EventDescription
            eventName="Distort"
            intro="You create a distortion field, a region of space that disrupts the hidden body connection, disorienting and slowing those that enter."
            linkTarget={linkMap.PneumaplegiaStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ flight: true, far: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Pneumaplegia Style"}
                  goals={["Area", "Drain"]}
                />
                <p>
                  Select a number of contiguous 1 meter spaces equal to Area. These spaces fill with a faint haze or
                  other visual effect that is noticeable in both physical and hidden space. They remain affected for the
                  rest of the scene, until you dismiss it as a non-action, or until you lose consciousness.
                </p>
                <p>
                  Any time someone would regain Metabolism points from starting their turn or using the Rest action
                  while inside the affected area, the amount each Metabolism regains is reduced by Drain. This can't
                  reduce the amount regenerated by any metabolism below 1. This even affects entities in hidden space.
                </p>
                <p>
                  If you already have an ongoing Distort event when you induce this event, the new area will merge with
                  the old one if they are contiguous or replace the old one entirely if they are not. The Drain value of
                  the entire merged field is equal to the Drain goal used when the event was most recently induced. You
                  can expand a field in this way a number of times equal to your Pneumaplegia rank.
                </p>
              </>
            }
          />
          <Section header="Asphyxiate" isClassified>
            <SpecializationDescription
              intro={<p>Your distortion fields can slowly squeeze the life of of those in them.</p>}
              ranks={[
                <p>
                  When someone starts their turn inside your distortion field with a Metabolism that has it's
                  regeneration reduced to 1, that Metabolism takes 1 Stress after regenerating. This Stress cannot
                  reduce a Metabolism Capacity below 1.
                </p>,
                <p>
                  Inside the field, it is impossible to use the Rest action or use the deep breath option to take two
                  inhale actions.
                </p>,
                <p>
                  If your distortion field inflicts Stress on a Metabolism with a capacity of 1, this person becomes
                  Unconscious and cannot awaken until they are no longer in the field.
                </p>,
              ]}
            />
          </Section>
          <Section header="Contraction Event" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can contract the manifold separating hidden and physical space, making transfer between the two
                  more difficult and causing hidden space to reflect physical forms more aggressively.
                </p>
              }
              ranks={[
                <>
                  <p>
                    Your Distort events have the additional Goal called Contraction. It cannot be used in the same event
                    as the Goal Dilation.
                  </p>
                  <p>
                    Entities in the shallowest depth layer of hidden space cannot exist inside a distortion field
                    created with any amount of Contraction. They cannot enter the field from outside. If they were
                    inside the field when you created it, they are are forced to immediately exit hidden space. If they
                    are unwilling to do so, or have no physical body, or have the Out of Body state and aren't within a
                    meter of their physical body, they instead take a point of Stress to Far and are moved into the
                    nearest space outside the event or their choosing.
                  </p>
                </>,
                <p>
                  Inducing a cascade event from inside, or affecting the area inside, of a distortion field with any
                  amount of Contraction is always high Effort.
                </p>,
                <p>
                  Any event induced from inside, or affecting the area inside, of your distortion field has an
                  additional Goal called Resistance added to it. This Goal must have an amount of Progress equal to the
                  amount of Contraction used to create the field applied to it before any other Goal can be used.
                </p>,
              ]}
            />
          </Section>
          <Section header="Dilation Event" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can force the spatial manifold separating the physical and hidden worlds to open further,
                  facilitating transfer between them and allowing sublimed physical material to sink deeper into hidden
                  space.
                </p>
              }
              ranks={[
                <>
                  <p>
                    Your Distort events have the additional Goal called Dilation. It cannot be used in the same event as
                    the Goal Contraction.
                  </p>
                  <p>
                    Entities in the shallowest layer of hidden space are visible inside distortion events with any
                    amount of Dilation.
                  </p>
                </>,
                <>
                  <p>
                    A dense visual haze of particles entering physical space is emitted within a meter of the ground
                    inside distortion fields with any amount of Dilation. Anyone inside the field can use the Elude
                    action become Unseen by ducking down into the haze.
                  </p>
                  <p>
                    Entities in the shallowest layer of hidden space gain the Sinking state if they end a turn inside a
                    field with Dilation.
                  </p>
                </>,
                <p>
                  Anyone inducing a cascade event in your distortion field may add an allocation bonus to the event's
                  Challenge equal to your Pneumaplegia rank, but each time this happens you take a point of Stress to
                  Flight or Far.
                </p>,
              ]}
            />
          </Section>
          <Section header="Halting Field" isClassified>
            <SpecializationDescription
              intro={<p>Your Distort events can stop foes in their tracks.</p>}
              ranks={[
                <p>
                  Every space inside your distortion field has its terrain difficulty increased by 1. Any ability that
                  can reduce the difficulty of terrain, such as the Traverse specialization, does not apply inside the
                  distortion field.
                </p>,

                <p>
                  For everyone currently inside your distortion field, every space adjacent to the field also has its
                  terrain difficulty increased by 1, making exiting difficult.
                </p>,
                <p>
                  When someone enters one of your distortion fields with the Move action, the action ends immediately
                  and they can move no further.
                </p>,
              ]}
            />
          </Section>
          <Section header="Hastening Field" isClassified>
            <SpecializationDescription
              intro={
                <p>You can selectively suppress or invert portions of your Distort events to speed up your allies.</p>
              }
              ranks={[
                <p>
                  When inducing Distort, you may choose to invert the effects, causing the field to help instead of
                  hinder. When people being helped by the field regain Metabolism points at the start of their turn,
                  each Metabolism regains a number of extra points equal to Drain. No other negative effects of the
                  field occur in this case.
                </p>,

                <p>
                  When your distortion field is in the helpful mode, anyone may treat every space in the field as
                  adjacent to every other space when they are moving.
                </p>,
                <p>
                  Your Distort event is now selective, you may choose who is helped by it and who is hinder. Those who
                  are helped have the benefits of the first two ranks of this Specialization, everyone else experiences
                  all other effects of the field.
                </p>,
              ]}
            />
          </Section>
          <Section header="Isolation Field" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can create spaces where time seems to flow at a noticeably different pace, isolating their
                  occupants.
                </p>
              }
              ranks={[
                <>
                  <p>
                    Your Distort event has an additional Goal called Isolated Targets. Using this Goal makes inducing
                    the event high Effort and high Risk. When you use this Goal, the only other Goal that can be used is
                    Area and the distortion field has no effects other than those described in this specialization. The
                    area affected when inducing the event must include a number of people exactly equal to the Isolated
                    Targets Goal. At this rank, you must be one of these people and all of the others must all be
                    willing.
                  </p>
                  <p>
                    The affected area and all its occupants are isolated from the flow of time and outside influences.
                    Time outside of the event appears to grind to a halt while it continues to flow inside it. For the
                    Duration, causality cannot cross the threshold of the event or interact with anyone inside it. No
                    beings, objects, gasses, signals, vision, objects in hidden space, or anything else can cross the
                    boundary. Anyone inside the field can exit it, however doing so immediately ends the event
                    completely for everyone. You can also dismiss this field at any moment as a non-action.
                  </p>
                  <p>At this rank, you cannot use the Isolated Targets goal in combat. </p>
                </>,
                <p>
                  You can now use the Isolated Targets goal in combat, however if you do the chaos of combat resists
                  this effect. You must use an inhale action and take a point of Stress to Flight and Far each turn
                  after you create the field to maintain it. From the inside, the outside world is still viable frozen
                  as it was at the start of the event, allowing you to take Aim actions at things outside it.
                </p>,
                <p>
                  Your Distort event now has a Stasis Goal. When you use this Goal, you can use no other Goals and
                  target only a single space. A person in this space must make a Willpower reaction. If the Stasis Goal
                  exceeds the result of the reaction, then this person is frozen in time until the end of your next
                  turn. They may take no actions, recover no metabolisms, and cannot be targeted or affected by anything
                  else. While this effect is active, you may use an inhale action and take a point of Stress to Flight
                  or Far in order to extend the duration of the stasis effect for until the end of your next turn. If
                  you take Stress from another source, such as being attacked, the stasis effect ends.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />
      <Section header="Focus + Self">
        <p>
          Mastering this Entanglement allows you to take charge of your instincts, the needs of your body, resist
          outside influence, or even fade out of physical space entirely.
        </p>
        <EntanglementDescription
          physMet={<Metabolism focus />}
          hidMet={<Metabolism self />}
          esoStyle={"Sublimation"}
          intStyle={"Confident"}
        />

        <Break />
        <Section header="Confident Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Focus + Self helps you function in adverse situations, resist
                influence and dissociation, and when transcend the physical needs of the body.
              </p>
            }
            styleName="Confident"
            rank1Bonus="When you use the Prime action, the Progress limits on the Prepared event are tripled instead of doubled."
            associatedAction="Willpower reactions"
          />

          <Section header="Auto-integrity" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Your willpower has more influence than the laws of physics over the integrity of your bodies. When
                  something would harm you, you decide that it simply doesn't.
                </p>
              }
              ranks={[
                <p>
                  When making a Melee, Ranged, Unarmed, or Ward defense reaction, you may use your Willpower allocation
                  bonus in instead of the usual allocation bonus.
                </p>,
                <p>
                  As long as you have available points of Focus, when one of your Hidden Metabolism capacities is
                  reduced to 0, you do not gain the Dissociative State that this normally causes. You only gain this
                  State if your current Focus value reaches 0.
                </p>,
                <p>
                  You may use Willpower in place of the defense reaction to any attack, but when you do this reaction is
                  high Risk and high Effort.
                </p>,
              ]}
            />
          </Section>
          <Section header="Commune" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Detached fragments of hidden bodies roam the world beyond our perception. These entities vary widely
                  from sub-animal to super-human levels of Intelligence, but are typically only liminally aware. You can
                  reliably detect, communicate with, and forge bonds with them.
                </p>
              }
              ranks={[
                <p>
                  If you spend a minute focusing, you become aware of every entity in hidden space within 10 meters.
                  This can detect both people with the Sublimed or Out of Body states as well as hidden body entities.
                  These entities may have differing communication abilities, anything from audible sounds, manifested
                  writing, or editing digital content are possible. Whatever means is required, you can always find it
                  within a few minutes and establish communication. Even if it has no viable means to communicate, you
                  can still create an empathic connection capable of conveying most concepts.
                </p>,
                <p>
                  By merging fragments of your own psyche and other minor hidden body entities over the course of an
                  hour, you create a new entity known as a familiar. This familiar is loyal to you and exists until you
                  gain any dissociative state. It can travel through hidden space independently of you and communicate
                  back to you telepathically within 100 meters. Familiars can observe any event in hidden or physical
                  space, but otherwise cannot enter, influence, or be detected from, physical space. No one your
                  familiar can see can have the Unseen state for you.
                </p>,
                <>
                  <p>
                    You can take a point of Stress to Focus to communicate with a transient, the lingering hidden body
                    of a recently deceased human. For a minute, you may ask questions of the transient, and answers will
                    come to you in the form of experiencing recent memories that the target had. The more time has
                    passed since the target died or the more hostile the target was to you in life, the lower the
                    quality of the information you can gain from it.
                  </p>
                  <p>
                    Additionally, you can direct your familiar to make a proxy by commandeering an articulated physical
                    form. This may be any corpse, mannequin, drone, robot, or non-human animal. You must spend an hour
                    with this form for your familiar to occupy it. It can then move and communicate in any way this form
                    is capable of. Your familiar has complete control over it for as long as it exists or until you
                    instruct it to abandon it.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Event Bandwidth" isInset>
            <SpecializationDescription
              intro={<p>You can induce cascade events with heightened intensity.</p>}
              ranks={[
                <p>When inducing any cascade event, you can replace the Physical Metabolism of its pair with Focus.</p>,
                <p>
                  When inducing a cascade event, choose a single Goal to increase once without applying any Progress on
                  it. This does not count towards the limit of how much Progress you can apply to a Goal.
                </p>,
                <p>
                  When inducing a cascade event, you may increase any or every Goal once without applying any Progress.
                  This does not count towards the limit of how much Progress you can apply to a Goal.
                </p>,
              ]}
            />
          </Section>
          <Section header="Insulation" isInset>
            <SpecializationDescription
              intro={<p>You have created a buffer that protects your hidden body from harm and influence.</p>}
              ranks={[
                <p>
                  Your mind is protected from outside influence. You cannot unwillingly be the target of any effect that
                  reads, inhibits, detects, or influences your mind or emotions. When inside a naturally occurring
                  cascade event you can choose whether to ignore or experience its effects.
                </p>,
                <p>
                  You cannot be targeted by the Hidden Attack action or other effects originating from hidden space
                  unless you have the Sublimed or Out of Body states. You cannot gain the Floating or Sinking states
                  against your will.
                </p>,
                <p>
                  While you are in physical space, you may choose to emit an aura at any time that prevents any person
                  or entity in hidden space from getting closer than a meter of you. If you move, this aura pushes these
                  entities outside of a meter from the path you follow.
                </p>,
              ]}
            />
          </Section>
          <Section header="Motivation" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You decide exactly how you feel at any moment, no matter your circumstances or physical needs,
                  allowing you to push harder for longer.
                </p>
              }
              ranks={[
                <p>
                  If you want to, you can have unlimited motivation and attention. During any downtime longer than a
                  day, you can accomplish twice as much work as someone else. You have Advantage on any Challenge
                  related to pursuing a long term project, resisting interrogation, enduring discomfort.
                </p>,
                <p>
                  You can Push Yourself any number of times during a Challenge, but each time must push a different
                  Metabolism.
                </p>,
                <p>Others can't change the mood you choose for yourself. You are immune to the Manipulate action.</p>,
              ]}
            />
          </Section>
          <Section header="Trans-spatial Reach" isInset>
            <SpecializationDescription
              intro={<p>You blur the lines between physical and hidden spaces, and can interact with both at once.</p>}
              ranks={[
                <p>You can use the Manifest action while in physical space.</p>,
                <p>
                  You can use the Hidden Attack action as if you were in the Sublimed state while in physical space or
                  the Out of Body state.
                </p>,
                <p>
                  You can target entities in hidden space entities with physical attacks. You can also make physical
                  attacks against physical targets from hidden space, but you gain the Floating state if you do.
                </p>,
              ]}
            />
          </Section>
        </Section>
        <Break />
        <Section header="Sublimation Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the entanglement of Focus + Self allows you to exit physical space entirely,
                becoming invisible and intangible.
              </p>
            }
            styleName="Sublimation"
            rank1Bonus="You can induce the Sublime cascade event."
            associatedAction="inducing Sublime events"
          />
          <EventDescription
            eventName="Sublime"
            intro="You still your mind, quiet the distractions of your body, open your senses to hidden space, and leave the physical world behind."
            linkTarget={linkMap.SublimationStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ focus: true, self: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Sublimation Style"}
                  goals={["Breach"]}
                />
                <p>
                  The Breach Goal indicates how effectively you traverse the veil between spatial regimes. If you don't
                  assign at least 2 Progress to it, nothing happens.
                </p>
                <p>
                  If you are in physical space, using this event gives you the Sinking state. If you have at least 6
                  Progress in Breach, you may choose to become Sublimed instead of Out of Body when the Sinking state
                  resolves.
                </p>
                <p>
                  If you are at depth layer 1 of hidden space, you gain the Floating state. If you have at least 6
                  Progress in Breach, you may instead choose to go deeper and either gain the Sublimed state or the
                  Sinking state if you are already Sublimed.
                </p>
                <p>
                  If you are in stygian space, exiting is difficult. You only gain the Floating state with 12 points of
                  Breach.
                </p>
                <p>If you are at any other depth, you gain the Floating state. </p>
              </>
            }
          />

          <Section header="Blink" isClassified>
            <SpecializationDescription
              intro={<p>You can rapidly enter hidden space and exit it somewhere else nearby.</p>}
              ranks={[
                <p>
                  When you use the Move action and Focus is one of the chosen Metabolisms paired in it, you may blink
                  instead of moving normally. When you blink you vanish from your original space and appear in a
                  destination space you can see. No obstacles, terrain, or abilities triggered by moving hinder you,
                  however anything un-traversable, such as glass or a metal grate, still blocks you.
                </p>,
                <p>
                  While in hidden space, you may use the Move action and blink to immediately exit to physical space at
                  your destination. If you have the Out of Body state, you can only exit this way if your destination
                  contains your physical body.
                </p>,
                <p>
                  When you blink, you can now teleport through any physical object that being at depth layer 1 of hidden
                  space would allow you to phase through. Additionally, each point of Focus spent on moving with blink
                  increases the distance you can move by a number of meters equal to your Sublimation rank instead of
                  just 1 meter.
                </p>,
              ]}
            />
          </Section>
          <Section header="Nonlocality" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  Time and interconnection work differently in hidden space than our intuition of physical space would
                  expect. You can take advantage of this to travel great distances effortlessly.
                </p>
              }
              ranks={[
                <p>You can ignore gravity while you are in hidden space and move freely vertically. </p>,
                <>
                  <p>
                    While you are in hidden space, regardless of whether you are Out of Body or Sublimed, your physical
                    body becomes less influenced by the passage of time and does not require sleep, water, food, oxygen,
                    or blood flow. If you have the Dying state, you will not die while you remain in hidden space. Any
                    time you would exit hidden space while Sublimed, you may choose to instead become Out of Body and
                    maintain this suspended animation.
                  </p>
                  <p>
                    Additionally, while you are in hidden space, your physical body enters a state of suspended
                    animation and does nor require sleep, water, food, or oxygen. This occurs regardless of whether your
                    physical body enters hidden space with you or if it is left behind in physical space.
                  </p>
                </>,
                <p>
                  While in hidden space, you can travel to any space you can sense in hidden space as an exhale action
                  with no cost, or travel anywhere on the planet within an hour. You could even drift to other locations
                  in the solar system within days. Be careful not to exit hidden space while in a lethal vacuum.
                </p>,
              ]}
            />
          </Section>
          <Section header="Split Autonomy" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  The Out of Body state is often a liability, leaving your unconscious physical body in danger. However,
                  you've learned to take advantage of being in two places at once.
                </p>
              }
              ranks={[
                <p>
                  While you have the Out of Body state, you can speak using your physical body's mouth. However,
                  otherwise it is still unaware.
                </p>,
                <>
                  <p>
                    You can still use the senses of your physical body while Out of Body and at any distance away from
                    it.
                  </p>
                  <p>
                    Additionally, when you fall asleep, you can assign a simple pre-planned task to your body. Your mind
                    sleeps and you gain the full benefits of normal sleep while your body sleepwalks its way to pursuing
                    this task. This task is primarily approached with instinct, muscle memory, and manual labor, it
                    cannot require significant intelligence, creativity, or awareness. Only half of the time you spend
                    sleeping can be spent this way.
                  </p>
                </>,
                <p>
                  While in the Out of Body state, both your physical and hidden bodies can act independently and
                  autonomously. On your turn you still get one inhale and one exhale action, but either body can use one
                  while the other uses the other, or one body can use both. The physical body can only use physical
                  metabolisms and the hidden body can only use hidden ones. You cannot induce any cascade event other
                  than Sublime in this state.
                </p>,
              ]}
            />
          </Section>
          <Section header="Storage" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  This lets you store physical objects in hidden space, rendering them invisible, weightless, and
                  intangible, and then retrieve them later when needed.
                </p>
              }
              ranks={[
                <p>
                  As an exhale action, you can touch a single uncontested nonliving item causing it to vanish as it
                  sublimes into hidden space. At any later time, you use this action again to retrieve the item into the
                  position required for immediate use, for example, a weapon would appear in your hand or a garment
                  would appear already worn on your body. You can maintain as many stored items as you can fit in 1
                  cubic meter.
                </p>,
                <p>
                  Storing or retrieving an object is now an inhale action. You can maintain as many stored items as you
                  can fit in 2 cubic meters.
                </p>,
                <p>
                  Storing or retrieving an object is now a non-action. You can maintain as many stored items as you can
                  fit in 3 cubic meters.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sublime Body" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You've refined your ability to bring physical matter deeper into hidden space and keep it there
                  longer.
                </p>
              }
              ranks={[
                <p>
                  You can reach depth layer 3. While at layer 2, you can induce Sublime with at least 6 points of Breach
                  to gain the Sinking state. While below depth layer 1 of hidden space, you don't naturally rise to
                  shallower levels each minute, or exit at the end of the scene, unless you want to
                </p>,
                <p>
                  While in physical space, you can use the Breach Other Goal when inducing Sublime. This Goal works the
                  same as the normal Breach Goal, but it targets another willing person you touch. You can use both
                  Goals together to travel with the target.
                </p>,
                <p>
                  The Breach Other Goal can now affect unwilling targets. The target gains the Sinking state and then
                  makes a Willpower reaction. If the reaction exceeds the result of the Breach Other Goal, the target
                  immediately gains the Floating state the moment they arrive in hidden space.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sublime Combat" isClassified>
            <SpecializationDescription
              intro={<p>You have mastered the tactical capabilities of subliming your body.</p>}
              ranks={[
                <p>
                  When inducing Sublime to enter or exit hidden space, you may skip gaining the Floating or Sinking
                  states and immediately arrive on the other side.
                </p>,
                <p>
                  When inducing Sublime to enter or exit hidden space, you may do so as an inhale action. If you do so
                  and then attack as an exhale action, you are Unseen until you complete the attack.
                </p>,
                <p>
                  Once per turn, you may take a point of Stress to Self to induce Sublime as a defense reaction to any
                  attack, attempting to cause the attack to phase harmlessly through you. If you do, the event has a
                  single Goal, Defense, which works the same as any other defense reaction. When you do this, you gain
                  the Sinking state and will become Sublimed when it resolves. While in the Sinking state in physical
                  space, you are partially intangible and have advantage on other defense reactions.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />
      <Section header="Focus + Near">
        <p>
          Mastering this Entanglement improves your ability to find and understand complex patterns, devise plans, and
          manipulate the strong force that binds atomic nuclei.
        </p>
        <EntanglementDescription
          physMet={<Metabolism focus />}
          hidMet={<Metabolism near />}
          esoStyle={"Chromodynamism"}
          intStyle={"Bright"}
        />
        <Break />
        <Section header="Bright Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Focus + Near boosts your ability to find patterns and
                understand the world.
              </p>
            }
            styleName="Bright"
            rank1Bonus="You can intuitively analyze and precisely enumerate even the hidden aspects of people and the environment. You can know if anyone you encounter has Hidden Metabolisms or Styles, as well as what Style they have the most ranks in. When you encounter an ongoing cascade event, whether it was induced by a person or is naturally occurring, you know precisely what its bounds and effects are."
            associatedAction="Intuition reactions"
          />
          <Section header="Embed Function" isInset>
            <SpecializationDescription
              intro={<p>You can understand and create objects with artifact functions.</p>}
              ranks={[
                <p>
                  You can identify and enumerate the properties of any trans-physical object you encounter by spending
                  an hour examining it. Additionally, you can craft items out of any exotic material you have access to
                  a sufficient amount of.
                </p>,
                <p>You can craft trans-physical objects with any hidden architecture and any rank 1 function. </p>,
                <p>You can craft trans-physical objects with functions of any rank.</p>,
              ]}
            />
          </Section>
          <Section header="Episemiotics" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Your hidden body can interface with others nearby, enabling you to understand communication on an
                  empathic level or even to steal memories from others.
                </p>
              }
              ranks={[
                <>
                  <p>
                    You can comprehend, but not speak, read, or write, the spoken language of anyone within Near meters
                    of you.
                  </p>
                  <p>
                    Once per scene, you can detect the presence of specific knowledge in a person within a meter of you.
                    The information must be simple enough to describe in a single simple sentence. You learn if the
                    target knows (or falsely believes) the described information, but not the contents of this
                    information.
                  </p>
                </>,
                <p>
                  You can speak, read, or write any language as fluently as anyone within a number of meters equal to
                  your Near shit score. When you detect the presence of information in someone, you now also learn the
                  contents of this information.
                </p>,
                <p>
                  When you detect the presence of information in someone, you can now take a point of unavoidable Stress
                  to Focus in order to excise this memory. You learn the desired memory and the target permanently
                  forgets it.
                </p>,
              ]}
            />
          </Section>
          <Section header="Event Flexibility" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You deeply understand the fundamental mechanisms that allow cascade events to work, allowing you to
                  improve and modify their effects.
                </p>
              }
              ranks={[
                <p>
                  You can induce cascade events subtly and carefully. If you wish, no one can tell you created an event,
                  and unless it has clear visual consequences they might not even notice it. Additionally, if an event
                  has an area of effect, you can sculpt this area to omit anyone you don't want to be affected by it.
                </p>,
                <p>
                  If one of the effects of an event you have can plausibly help you in a situation, you can induce a
                  minor version of it as an Improvise action. The event has no other effects beyond the result of the
                  Improvise action.
                </p>,
                <p>
                  You can induce a reduced version of cascade events as an inhale action. When you do, only a single
                  Goal may be used and only a single point may be spent from each Metabolism involved in the Challenge.
                </p>,
              ]}
            />
          </Section>
          <Section header="Exoproprioception" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Similar to natural proprioception that allows you to know the position and orientation of any part of
                  your body, exoproprioception allows you to sense the position and shape of any object within range,
                  but not visual or tactile information like color, texture, patterns, or weight.
                </p>
              }
              ranks={[
                <p>
                  You have the sense of exoproprioception within a range of meters equal to your Near score. You can
                  navigate blindly at full speed. This sense can detect physical space even when you are in hidden
                  space.
                </p>,
                <p>
                  Your exoproprioception allows you to feel the path an attack follows. When making a Melee, Ranged, or
                  Unarmed defense reaction, you may use your Intuition allocation bonus in instead of the usual
                  allocation bonus
                </p>,
                <p>
                  Your exoproprioception is now sensitive enough that you can blindly engage in combat without penalty
                  with anything in its range.
                </p>,
              ]}
            />
          </Section>
          <Section header="Isolate Signal" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can intuitively sense mechanical, electrical, and biological oscillation, and therefore the clock
                  signal that synchronizes computer operations and neural resonance. With practice you can create a
                  counter oscillation that disrupts and prevents resonance and signals from propagating.
                </p>
              }
              ranks={[
                <p>
                  As an inhale action, you take a moment to open your senses to normally imperceptible rhythms within a
                  range of your Near score. You become aware of the presence, location, and complexity of all nervous
                  systems more complex than an insect and all devices capable of basic computing or timekeeping. A
                  device must be fully unpowered, not idling or on standby, to remain undetected. You can maintain this
                  awareness for a minute.
                </p>,
                <p>
                  As an Interact action, select a number, up to your Near score, of devices you can sense the rhythm of.
                  These devices crash and become disabled until manually restarted.
                </p>,
                <p>
                  As an inhale action that causes a point of unavoidable Stress to Focus, you prevent oscillatory
                  systems from resonating with others within a range of you equal to your Near score. This prevents all
                  humans other than you from comprehending or creating language while they remain in range. It also
                  prevents any device in range from transmitting or receiving a wired or wireless signal. This effect
                  lasts for up to an minute.
                </p>,
              ]}
            />
          </Section>
          <Section header="Mimic" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Mimic You can quickly memorize the patterns in the skills of others when you witness them and
                  temporarily mimic them perfectly.
                </p>
              }
              ranks={[
                <p>
                  After you witness someone using a skill based Trait, you can take a point of Stress to Focus to
                  temporarily gain the same Trait for the rest of the scene. You can only gain one Trait this way, if
                  you mimic another it replaces the previous one.
                </p>,
                <p>While you are mimicking a Trait, you may keep it indefinitely until you mimic a different Trait.</p>,
                <p>
                  After you witness someone inducing any cascade event, you may take a point of Stress to Focus within
                  the next minute to induce the same event a single time. You only have access to the core Goals
                  available to this event, but the limit of Progress you can apply to each is your Bright rank.
                </p>,
              ]}
            />
          </Section>
        </Section>
        <Break />
        <Section header="Chromodynamism Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the entanglement of Focus + Near allows you to control the strong fundamental
                force that binds atomic nuclei. This ability is expressed primarily by transmuting elements into others.
              </p>
            }
            styleName="Chromodynamism"
            rank1Bonus="You can induce the Transmute cascade event."
            associatedAction="inducing Transmute events"
          />
          <EventDescription
            eventName="Transmute"
            intro="You touch an unattended non-living object and alter its material properties."
            linkTarget={linkMap.ChromodynamismStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ focus: true, near: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Chromodynamism Style"}
                  goals={["Transmute Size"]}
                />
                <p>
                  An object that would fit within a diameter of a number of centimeters equal to the Transmute Size
                  Goal, or a similarly sized spherical portion within a larger object, changes from one material to
                  another. The shape and structure are unchanged. The new material must be a single homogeneous
                  substance of the same state (solid, liquid, gas) as the original that will not react strongly with
                  itself or its context. Toxic substances are possible but dangerous because you must remain touching it
                  and near any fumes or radiation for the duration of the transformation.
                </p>
                <p>
                  For example, you could turn water into gasoline, or salt into iron, but not turn something into
                  concrete (not homogeneous) or pure sodium (explosively reactive with the environment).
                </p>
              </>
            }
          />
          <Section header="Chromaception" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  The “sixth sense” of chromaception is minimally present in all people, but you've refined it into 360°
                  situational awareness of the chromodynamic wakes that physical objects impart on hidden space.
                </p>
              }
              ranks={[
                <p>
                  You gain chromaception within a number of meters equal to your Near score. This sense can detect the
                  rough shape and motion of everything in physical or hidden space, regardless of circumstances, but it
                  cannot discern texture, color, or small shapes.
                </p>,
                <p>
                  You can sense the position of everything in range of your chromaception, regardless of blocked lines
                  of sight. At the start of combat, you know the precise location of all enemies in range, even if they
                  are completely hidden. However, rapid motion frustrates this sense and enemies can still hide from you
                  after combat begins.
                </p>,
                <p>
                  You can sense through walls and other obstacles within the range of your chromaception. If you take a
                  full minute to focus, you can discern smaller details this way enabling reading and sensing inside of
                  objects.
                </p>,
              ]}
            />
          </Section>
          <Section header="Composite" isClassified>
            <SpecializationDescription
              intro={<p>You can transmute things into more complex materials.</p>}
              ranks={[
                <p>
                  When you use Transmute, the resulting transformed area can include up to three different homogenous
                  materials. These materials are crudely arranged unless you have ranks in Reshape. Additionally, as an
                  inhale action you can permanently fuse two objects you touch.
                </p>,
                <p>
                  Materials transmuted can now include any number complex composite substances in both their original
                  and resulting material. For example, you could turn laminated wood into surface-hardened metal alloys.
                  The internal structure of an object you transmute can have any level of complexity, as long as it's
                  external shape is something allowed by your ranks in Reshape.
                </p>,
                <p>
                  If you spend an hour inducing Transmute, you can turn any material into any other material, including
                  reactive, hazardous, or radioactive substances.
                </p>,
              ]}
            />
          </Section>
          <Section header="Condense Matter" isClassified>
            <SpecializationDescription
              intro={<p>You can create solid objects out of thin air.</p>}
              ranks={[
                <p>
                  When you use the Transmute event, you can transform ambient gasses into any homogenous liquid or
                  solid.
                </p>,
                <p>
                  When you use the Transmute event, you can skim the virtual particles out of an absolute vacuum in
                  order to transform it into any homogeneous solid, liquid, or gas. Fluids created this way quickly
                  disperse if they are not contained in some way.
                </p>,
                <>
                  <p>
                    Materials you create can be permanent or evaporate into harmless radiation after a set amount of
                    time.
                  </p>
                  <p>
                    Additionally, by taking a point of Stress to Focus and spending an hour in concentration you can
                    accrete a cubic centimeter of color glass. This material is a single macroscopic hadron and is
                    effectively indestructible. It is also unworkable and can only be shaped during its creation at a
                    level of precision determined by your rank in Reshape. When creating this material you may create a
                    new object or add to an existing one. Weapons or ammunition made of color glass deal an extra point
                    of Threat and armor made of it has an extra point of defense than it otherwise would.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Create Pattern" isClassified>
            <SpecializationDescription
              intro={<p>You can familiarize yourself with objects and recreate them. </p>}
              ranks={[
                <p>
                  As an inhale action, you can create any melee weapon of a size equal to our less than your
                  Chromodynamism rank. These weapons evaporate after combat is over. If you also have 3 ranks in
                  Condense Matter, these weapons act is if they were made of color glass.
                </p>,
                <p>
                  Once per day, you can take a point of Stress to Focus to duplicate any object that you hold for a
                  minute of intense concentration. You do not have to have ranks in the Specializations that would
                  normally be required to create such an item. The duplicate is identical to the original including any
                  digital data or forensic evidence.
                </p>,
                <p>
                  When you duplicate an object, you no longer need to hold it. You can do it from memory if you have
                  seen the object in the last hour.
                </p>,
              ]}
            />
          </Section>
          <Section header="Entropic Combat" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can decay and destabilize living things at an atomic level. Humans thus afflicted experience
                  internal hemorrhaging, abraded flesh, and decaying bones.
                </p>
              }
              ranks={[
                <p>
                  You can make an Entropic Attack. As an exhale action requiring Focus + Near, you touch a target which
                  triggers an Unarmed Defense reaction. If even a single point of Progress isn’t blocked by the
                  reaction, the attack has full effect. It does no damage immediately, but the target is afflicted for a
                  duration equal to your Chromodynamism style rank. Before Metabolisms points refresh at the start of
                  the target's turns, the target takes a point of unavoidable Stress to all uninjured physical
                  metabolisms. The remaining duration then decreases by one. The effect ends when the duration reaches 0
                  or you dismiss it as a non-action. A currently affected target cannot be affected by the Heal action,
                  medical care, or by more than a single entropic attack at once. At the end of combat, an affected
                  target can catch their breath and move carefully in order to ignore any remaining duration.
                </p>,
                <p>Your Entropic Attack no longer requires touch and has a range equal to your Near score.</p>,
                <p>
                  Your also Entropic Attack deals a point of Stress to all physical metabolisms immediately upon being
                  applied.
                </p>,
              ]}
            />
          </Section>
          <Section header="Reshape" isClassified>
            <SpecializationDescription
              intro={<p>You can sculpt materials into complex and precise shapes.</p>}
              ranks={[
                <p>
                  Your Transmute events gain a Goal called Reshape Size. You can instantly sculpt everything within a
                  diameter of Reshape Size in centimeters into any shape. No reshaped features may be smaller than a
                  centimeter. Both Transmute Size and Reshape Size can be used simultaneously to change the materials
                  and shape of an object.
                </p>,

                <p>
                  Reshaped materials can now include small features, precise textures, minute text, and sharp edges. The
                  area in Reshape Size can also include voids of any size up to the entire affected area, completely
                  deleting the material that was in their place.
                </p>,
                <p>
                  You have enough control over the area inside Reshape Size to create interlocking or moving parts. You
                  could plausibly create any functional machine that you know how to create by mundane means. For
                  example, if you had the Trait Mechanic you could turn a block of wood into a functional engine. If you
                  have ranks in Composite this can include working circuits and semiconductors.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />
      <Section header="Focus + Far">
        <p>
          Mastering this Entanglement sharpens your senses, alertness, social modeling, and can even allow you to
          directly link to other minds or sense things remotely.
        </p>

        <EntanglementDescription
          physMet={<Metabolism focus />}
          hidMet={<Metabolism far />}
          esoStyle={"Telethesia"}
          intStyle={"Alert"}
        />
        <Break />
        <Section header="Alert Style">
          <StyleDescription
            intro={
              <p>The intuitive style of the entanglement of Focus + Far focuses on sensory and social awareness.</p>
            }
            styleName="Alert"
            rank1Bonus="Enemies cannot surprise you. You can act normally in the first round of combat when you are ambushed."
            associatedAction="Intuition reactions"
          />
          <Section header="Cold Reading" isInset>
            <SpecializationDescription
              intro={<p>You can read people like a book with a single glance.</p>}
              ranks={[
                <p>
                  When interacting with a human you always know what their true opinion of you is or what their current
                  intent is.
                </p>,
                <p>
                  You always know immediately if a human is lying to you, whether directly or by omission, or attempting
                  to deceive you in any other way.
                </p>,
                <p>
                  When you encounter a person for the first time, the GM must offer you a piece of useful information
                  about them that isn't apparent to others. The GM decides what this information is, but you can suggest
                  what aspect about them you are focusing on or what answer you are searching for.
                </p>,
              ]}
            />
          </Section>
          <Section header="Crowd Control" isInset>
            <SpecializationDescription
              intro={<p>You can fade into the background or stand out vibrantly in a room.</p>}
              ranks={[
                <p>
                  As an inhale action, gain the Faded state with an intensity equal to your Alert style rank or increase
                  the intensity of this state by this amount. If there are more than 10 people nearby, you can fade into
                  the crowd, doubling the Fade intensity you gain.
                </p>,
                <p>
                  When you use the manipulate action, you may target any number of people up to the sum of your Alert
                  rank and your rank in this specialization.
                </p>,
                <p>
                  When you have the Faded state, you may choose to also make your identity unrecognizable. Even
                  recording equipment, facial recognition software, and people the still notice you in this state cannot
                  identify your face. Conversely, you can stand out in a crowd. When you use Manipulate to cause the
                  Enthralled state, you can target any number of people that can see you.
                </p>,
              ]}
            />
          </Section>
          <Section header="Detect Sensorium" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Observation leaves an impression on the chromodynamic wakes of objects in hidden space. As your hidden
                  boy reaches out over distances it can detect these impressions, granting you an awareness of what
                  others perceive.
                </p>
              }
              ranks={[
                <p>You know at all times if anyone can currently see you. </p>,
                <p>
                  You know the presence and location of all active video cameras, audio recorders, motion sensors, or
                  similar devices within a number of meters equal to your Far score.
                </p>,
                <p>
                  You can tell at all times exactly what spaces are currently being observed and their likelihood of
                  being observed in the next round.
                </p>,
              ]}
            />
          </Section>
          <Section header="Empath" isInset>
            <SpecializationDescription
              intro={<p>You have an intuitive sense of the emotional state of others. </p>}
              ranks={[
                <p>
                  When you enter a new social context, you immediately get a sense for the emotional state of everyone
                  present.
                </p>,
                <>
                  <p>
                    You can sense the lingering vibes of a a space. When you enter it a room you become aware of the
                    emotional context of its most recent occupants and the nature of any recent intensely felt
                    sensations in it.
                  </p>
                  <p>
                    Additionally, when you use the Manipulate action, you may also gain the state you attempt to grant
                    the target. If you do so, or if you already had this state, the Manipulate action is Prepared.
                  </p>
                </>,
                <p>
                  You have advantage on the Manipulate action of another person you can sense is present that already
                  has the state you're targeting.
                </p>,
              ]}
            />
          </Section>
          <Section header="Investigation" isInset>
            <SpecializationDescription
              intro={<p>You can get to the bottom of any mystery. </p>}
              ranks={[
                <p>
                  Once per session, when you have enough downtime to research a topic, you may ask the GM any one
                  question that you could plausibly have found the answer to in this time and in your current context.
                  The GM must answer correctly.
                </p>,
                <p>When talking with someone else, you can always tell if they know something you want to know. </p>,
                <p>
                  Once per session, you can find a clue towards any plot. This clue is specific to the current context
                  and your location. It may not explain the bigger picture, but it will always guide you to what you
                  need to do next.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sharp Senses" isInset>
            <SpecializationDescription
              intro={<p>This specialization boosts the power of your existing senses to incredible levels. </p>}
              ranks={[
                <p>
                  You can read the lips of anyone you can see and understand whispers in an adjacent room. You have
                  advantage on Perception reactions.
                </p>,
                <p>
                  You can track someone by scent alone and detect heartbeats in an adjacent room. You are always aware
                  of the location of anyone in combat, no one can have the Unseen state from your point of view.
                </p>,
                <p>
                  You can navigate and engage in combat when blinded without penalty solely using the echoes of ambient
                  sound.
                </p>,
              ]}
            />
          </Section>
        </Section>
        <Break />
        <Section header="Telethesia Style">
          <p>
            The esoteric style of the entanglement of Focus + Far allows you to customize the Telepathy event’s
            capabilities within other minds or remote sensing.
          </p>
          <EventDescription
            eventName="Telepathy"
            intro="The diffuse bounds of your hidden body reach out over a distance to sense and interface with other minds."
            linkTarget={linkMap.ChromodynamismStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ focus: true, near: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Telethesia Style"}
                  goals={["Range", "Participants"]}
                />
                <p>
                  Select a number of willing Participants within Range. For the rest of the scene, you and all
                  participants can communicate telepathically. This communication is undetectable to outsiders.
                </p>
                <p>
                  Telepathic communication occurs at a slightly faster speed and bandwidth than normal speech, but still
                  requires a shared language.
                </p>
                <p>You can induce this event subtly, preventing any witnesses from knowing anything happened.</p>
              </>
            }
          />

          <Section header="Clairvoyance" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can use Telepathy to sense what happens at distant locales regardless of any obstacles in the way.
                </p>
              }
              ranks={[
                <p>
                  Your Telepathy action bonus increases by 1. The Range metric of Telepathy improves to “10x, minimum =
                  10 meters”. When you induce Telepathy you may take a point of unavoidable Stress to Focus in order to
                  scry on a location. Select a location within Range that you have previously seen before. You and all
                  Participants can see what is happening at this location in your minds for the rest of the scene.
                </p>,
                <>
                  <p>
                    Telepathy gains the metric "Influence: 1, minimum = 0" if it didn't already have it. Influence has
                    multiple possible uses, you can only use one when you induce the event.
                  </p>
                  <p>
                    When you scry on a location you can choose to do so with retrocognition, observeing the location not
                    as it currently is, but rather as it was at a chosen moment in the past within a number of days
                    equal to Influence.
                  </p>
                </>,
                <p>
                  When you scry, you do not need to have seen the location before. You and all Participants gain all of
                  their senses at the location. You can observe the area retrocognitively at any chosen past moment
                  within a number of years equal to Influence.
                </p>,
              ]}
            />
          </Section>
          <Section header="Implant Thought" isClassified>
            <SpecializationDescription
              intro={
                <p>You instill a lasting influence into the minds of others, altering their behavior for a time.</p>
              }
              ranks={[
                <>
                  <p>
                    Telepathy gains the metric “Influence: 1 point” if it didn't already have it. Influence has multiple
                    possible uses, you can only use one when you induce the event.
                  </p>
                  <p>
                    You can use Influence to implant a thought into the mind of a target you can see in Range. When you
                    do, the target can make a default risk and effort Willpower reaction. If Influence is less than the
                    result of this reaction, the target is unaffected. Otherwise, you stimulate the target's brain to
                    continually release a single specific neurotransmitter causing a crude emotion or phantom sensation
                    of your choosing. The target continues to feel this strongly for the rest of the scene.
                  </p>
                </>,
                <p>
                  When you succeed at using Influence to implant a thought in a target, you can include a suggested
                  action or simple goal. An affected target feels a compulsion to take this action or pursue this goal.
                  This effect remains in place for the rest of the scene and then continues for a number of hours equal
                  to the sum of the Influence and Participants metrics used to induce the event. Any time the target
                  perceives an opportunity to follow your suggestion they may make a default risk and effort Willpower
                  reaction. If they do not, or if Influence is lower than the result of this reaction, then they must
                  follow the suggestion. Each time the target successfully resists and avoids following the compulsion,
                  reduce the Influence level by 1 until it reaches 0 and the target is unaffected.
                </p>,
                <>
                  <p>
                    When you succeed at using Influence to implant a suggestion into a target, this suggestion now lasts
                    for a number of days equal to Influence plus Participants instead of hours.
                  </p>
                  <p>
                    Alternatively, when you succeed you can choose to implant a false memory into the target instead of
                    a suggestion. As long as this memory is plausible, the target believes it permanently until it is
                    proven false.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Mind Control" isClassified>
            <SpecializationDescription
              intro={<p>You can seize control over simpler nervous systems.</p>}
              ranks={[
                <>
                  <p>
                    Telepathy gains the metric "Influence: 1, minimum = 0" if it didn't already have it. Influence has
                    multiple possible uses, you can only use one when you induce the event.
                  </p>
                  <p>
                    You can use Influence to seize control over many simple nervous systems. This can only affect
                    animals with no hidden body, this includes all invertebrates and jawless fish. For the rest of the
                    scene, you can completely control all qualifying animals that remain within a number of meters equal
                    to Influence of any Participant.
                  </p>
                </>,
                <p>
                  You can use Influence to control a few non-mammalian animals. Choose a number of qualifying animals
                  you can see equal to Influence within Range. You control the actions of these animals for the rest of
                  the scene, even if they leave Range.
                </p>,
                <p>
                  You can use Influence to control any earth animal or non-entangled human. Choose a single qualifying
                  target you can see within Range. The target can make a Willpower reaction. If your Influence exceeds
                  this reaction, you gain control. If the target is human, ordering it to take an action uses one of
                  your actions and you take a point of unavoidable Stress to Focus at the start of each round until you
                  relinquish control as a non-action.
                </p>,
              ]}
            />
          </Section>
          <Section header="Psychosomaticism" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can add subtle telepathic suggestions to your Manipulate actions that can convince the target to
                  believe false things about the state of their body so intensely that their mind makes it real.
                </p>
              }
              ranks={[
                <p>
                  Your Manipulate action can now cause the Grappled state as if the target was restrained by an
                  invisible attacker in a space adjacent to them of your choosing.
                </p>,
                <p>
                  Your Manipulate action can now cause the Suppressed state in a target no matter where they are. The
                  states caused by your Manipulate actions don’t expire on your next turn but instead last until the
                  target is able to clear them normally.
                </p>,
                <p>Your Manipulate action can now cause the Unconscious state in non-entangled targets.</p>,
              ]}
            />
          </Section>
          <Section header="Read Mind" isClassified>
            <SpecializationDescription
              intro={<p>You can examine the thoughts and memories of others.</p>}
              ranks={[
                <>
                  <p>
                    Telepathy gains the metric “Influence: 1 point” if it didn't already have it. Influence has multiple
                    possible uses, you can only use one when you induce the event.
                  </p>
                  <p>
                    You can use Influence to attempt to read the mind of a target you can see in Range. When you do, the
                    target can use a default risk and effort Willpower reaction. If Influence is greater than the result
                    of the reaction you and all Participants can read the target's surface thoughts for the rest of the
                    scene. This includes their emotional state and infernal monologue.
                  </p>
                </>,
                <p>
                  If the event’s influence ties the target's reaction, the event grants access to surface thoughts. If
                  it is higher, it also accesses short term memories. This includes recent events and things that have
                  been on the target's mind earlier in the day.
                </p>,
                <>
                  <p>
                    If the event’s influence is lower than the target's reaction, the event still grants access to
                    surface thoughts. If it ties, it grants access to short term memories. If it is higher, it also
                    accesses long term memories.
                  </p>
                  <p>
                    The greater the difference between Influence and a lower reaction, the deeper the memories you can
                    access. Recent memories are easy, older memories might require at least 2, a dark secret at least 3.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Sense Minds" isClassified>
            <SpecializationDescription
              intro={<p>You can feel the other minds around you.</p>}
              ranks={[
                <p>
                  At all times, you can sense the presence and location of any sentient minds within a number of meters
                  equal to your Far score, even if they are in hidden space.
                </p>,
                <p>You are aware of the general emotional state and stress level of the minds you sense.</p>,
                <p>
                  You know if the minds you sense are developing hostile intent, granting you advantage on any
                  initiative Challenges involving human opponents.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default ChapterEntanglements;
